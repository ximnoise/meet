import React, { Component } from 'react';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import Login from './Login';
import { getEvents, extractLocations, checkToken } from './api';
import './styles/App.scss';
import './styles/nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: '24',
    tokenCheck: false
  };
  // numberOfEvents uses a string to prevent type conversion

  async componentDidMount() {
    const accessToken = localStorage.getItem('access_token');
    const validToken = accessToken !== null ? await checkToken(accessToken) : false;
    this.setState({ tokenCheck: validToken });
    if (validToken === true) {
      this.updateEvents()
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');
      this.mounted = true;
      if (code && this.mounted === true && validToken === false) {
        this.setState({ tokenCheck: true });
        this.updateEvents();
      }
    }
    getEvents().then((response) => {
      if (this.mounted) {
        this.setState({
          events: response.events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(response.events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Filters events based on location and number given in user input
  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;

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
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
