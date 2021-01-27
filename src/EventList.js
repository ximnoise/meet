import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map((e) => 
          <li key={e.id}>
            <Event event={e} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;