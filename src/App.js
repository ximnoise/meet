import './App.css';
import React, { Component } from 'react';
import './EventList';
import EventList from './EventList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventList />
      </div>
    );
  }
}

export default App;
