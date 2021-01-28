import './App.css';
import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
      </div>
    );
  }
}

export default App;
