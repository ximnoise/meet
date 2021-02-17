import React, { Component } from 'react';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import Login from './Login';
import { getEvents, checkToken } from './api';
import { WarningAlert } from './Alert';
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
    this.mounted = true;
    if (!navigator.onLine) {
      this.setState({
        warningText: 'You are currently offline and the app shows the data from your last visit. Data will not be up-to-date.'
      });
    } else {
      this.setState({
        warningText: ''
      });
    }

    if (this.mounted) {
      this.updateEvents();
    }

    /*
    const accessToken = localStorage.getItem('access_token');
    const validToken = accessToken !== null ? await checkToken(accessToken) : false;
    this.setState({ tokenCheck: validToken });
    if (validToken === true) this.updateEvents()
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');


    if (code && this.mounted === true && validToken === false) {
      this.setState({ tokenCheck: true });
      this.updateEvents();
    }

    getEvents().then((response) => {
      if (this.mounted) {
        this.setState({
          events: response.events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(response.events),
        });
      }
    });
    */
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Filters events based on location and number given in user input
  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;

    this.setState({ warningText: 'Please wait, events are loading...' });

    // If user selects a location from input
    if (location) {
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
        <WarningAlert text={this.state.warningText} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
