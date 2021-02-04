import React from 'react';
import Event from './Event';

const EventList = ({ events }) => {
  return (!events) ? null : (
      <ul className='EventList'>
        {events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
  )
}

export default EventList;