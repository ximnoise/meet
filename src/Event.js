import React, { Component } from 'react';

class Event extends Component {
  state = {
    showHideDetails: false
  };

  handleShowHideButton = () => {
    if (this.state.showHideDetails === true) {
      this.setState({ showHideDetails: false });
    } else {
      this.setState({ showHideDetails: true });
    }
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h2>{event.summary}</h2>
        <p>{event.start.dateTime}</p>
        <p>@{event.summary} | {event.location}</p>
        {this.state.showHideDetails && (
          <div className='event-details'>
            <h3>About event:</h3>
            <h4>
              <a href={event.htmlLink} target="_blank" rel="nooponer noreferrer">
                See Details on Google Calendar
              </a>
            </h4>
            <p className="description">{event.description}</p>
          </div>
        )}
        <button
          className="details-btn"
          onClick={() => this.handleShowHideButton()}
        >
          {!this.state.showHideDetails ? 'show details' : 'hide details'}
        </button>
      </div>
    );
  }
}

export default Event;