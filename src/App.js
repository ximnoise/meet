import React, { Component } from 'react';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import Login from './Login';
import EventGenre from './EventGenre';
import { getEvents, checkToken } from './api';
import { WarningAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './styles/App.scss';
import './styles/nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: '24',
    tokenCheck: false,
    warningText: ''
  };
  // numberOfEvents uses a string to prevent type conversion

  async componentDidMount() {
    const accessToken = localStorage.getItem('access_token');
    const validToken = accessToken !== null ? await checkToken(accessToken) : false;
    this.setState({ tokenCheck: validToken });
    if (validToken === true) this.updateEvents()
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    this.mounted = true;
    if (code && this.mounted === true && validToken === false) {
      this.setState({ tokenCheck: true });
      this.updateEvents();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Filters events based on location and number given in user input
  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;

    if (!navigator.onLine) {
      this.setState({
        warningText: 'You are currently offline and the app shows the data from your last visit. Data will not be up-to-date.'
      });
    } else if (location) { // If user selects a location from input
      this.setState({
        warningText: 'Please wait, events are loading...'
      });
      getEvents().then((response) => {
        // Applies new filter for location
        const locationEvents =
          location === 'all'
            ? response.events
            : response.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: events,
          currentLocation: location,
          locations: response.locations,
          warningText: ''
        });
      });
    } else {
      getEvents().then((response) => {
        // Persists location filter from state
        const locationEvents =
          currentLocation === 'all'
            ? response.events
            : response.events.filter(
                (event) => event.location === currentLocation
              );
        const events = locationEvents.slice(0, eventCount);
        return this.setState({
          events: events,
          numberOfEvents: eventCount,
          locations: response.locations,
          warningText: ''
        });
      });
    }
  };

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(' ').shift();
      return { city, number };
    })
    return data;
  };

  render() {
    const { numberOfEvents, events, locations, tokenCheck } = this.state;

    return tokenCheck === false ? (
      <div className="App">
        <Login />
      </div>
    ) : (
      <div className='App'>
        <h1>Meet App</h1>
        <CitySearch
          locations={locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <div className='data-vis-wrapper'>
          <h4>Events in each city</h4>
          <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#c51f5d" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <WarningAlert text={this.state.warningText} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;