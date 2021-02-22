import React, { Component } from 'react';
import moment from 'moment';

class Event extends Component {
  state = {
    isExpanded: false, // Event is collapsed by default
  };

  // Toggle expand/collapse event on click
  handleExpandEvent = () => {
    if (this.state.isExpanded === false) {
      this.setState({
        isExpanded: true,
      });
    } else {
      this.setState({
        isExpanded: false,
      });
    }
  };

  // The elements displayed when event is expanded
  renderExpandedComponent = () => {
    const { event } = this.props;

    if (this.state.isExpanded) {
      return (
        <div className='eventExpanded'>
          <button className="eventCard--link"><a href={event.htmlLink}>Click to Attend Event</a></button>
          <p className="eventCard--description"><span>Description: </span>{event.description}</p>
          <p className="eventCard--organizer"><span>Organizer: </span>{event.organizer.email}</p>
        </div>
      );
    }
  };

  // Toggles button text
  renderButtonText = () => {
    return !this.state.isExpanded ? 'Show details' : 'Hide details';
  };

  // Formats time data
  formatTime = () => {
    const time = this.props.event.start.dateTime;
    const formattedTime = moment(time).format("dddd, MMMM Do YYYY, h:mm a");
    return <span className='start-dateTime'>{`${formattedTime}`}</span>
  };

  render() {
    const { event } = this.props;

    return (
      <div className='event'>
        <div className='eventCard'>
          <h2 className='eventCard--name'>{event.summary}</h2>
          <p className='eventCard--date'><span>Starts at: </span>{this.formatTime()}</p>
          <p className='eventCard--date'><span>Timezone: </span>{event.start.timeZone}</p>
          <p className='eventCard--location'><span>Location: </span>{event.location}</p>
        </div>
        <div>{this.renderExpandedComponent()}</div>
        <button
          type='button'
          className='btn-details'
          onClick={this.handleExpandEvent}
        >
          {this.renderButtonText()}
        </button>
      </div>
    );
  }
}

export default Event;