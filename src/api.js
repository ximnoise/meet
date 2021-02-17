import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';

// *===== Data Retrieval Functions *===== //
const getEvents = async () => {
  NProgress.start();

  // Return mockData for local user
  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();
    return { events: mockData, locations: extractLocations(mockData)};
  }

  const token = await getAccessToken();

  if (!navigator.onLine) {
    const events = localStorage.getItem('lastEvents');
    NProgress.done();
    return {
      events: JSON.parse(events).events,
      locations: extractLocations(JSON.parse(events).events)
    };
  }

  // Calls API to retrieve events data
  if (token) {
    removeQuery();
    const url = `https://yib3acn0wb.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}`;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem('lastEvents', JSON.stringify(result.data));
      localStorage.setItem('locations', JSON.stringify(locations));
    }
    NProgress.done();
    return { events: result.data.events, locations };
  }
};

const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

// *===== Authentication & Authorization Functions =====* //
const getAccessToken = async () => {
  // Looks for pre-existing token in storage & check validity
  const accessToken = await localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  // If no token or invalid token, retrieve new token through google authorization
  if (!accessToken || !tokenCheck) {
    await localStorage.removeItem('access_token'); // Remove invalid token

    // Look for authorization code
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');

    // If no auth code, redirect to Google Auth screen to sign in and retrieve code
    if (!code) {
      const results = await axios.get(
        'https://yib3acn0wb.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url'
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

// Checks validity of access token
const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result.error ? false : true;
};

// Gets new token from AWS Lamba if there is no token or invalid token
const getToken = async (code) => {
  removeQuery();
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://yib3acn0wb.execute-api.eu-central-1.amazonaws.com/dev/api/token/${encodeCode}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem('access_token', access_token);

  return access_token;
};

// Removes code from URL after it is used
const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname;
    window.history.pushState('', '', newurl);
  } else {
    newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState('', '', newurl);
  }
};

export {
  getEvents,
  getAccessToken,
  extractLocations,
  removeQuery,
  checkToken,
  getToken,
};


