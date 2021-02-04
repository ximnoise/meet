import React, { Component } from 'react';
import Moment from 'moment';

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
        <div className='Expanded-Event'>
          <h4>About event:</h4>
          <div className='link-container'>
            <a
              className='link'
              href={event.htmlLink}
              rel='noreferrer'
              target='_blank'
            >
              See details on Google Calendar
            </a>
          </div>
          <p className='description'>{event.description}</p>
        </div>
      );
    }
  };

  // Toggles button text
  renderButtonText = () => {
    return !this.state.isExpanded ? 'Show details' : 'Hide details';
  };

  render() {
    const { event } = this.props;
    const eventTime = Moment(event.start.dateTime).format('MM-DD-YYYY');

    return (
      <div className='Event'>
        <div className='heading'>
          <h2 className='summary'>{event.summary}</h2>
          <div className='subheading'>
            <div className='time'>{eventTime}</div>
            <div className='location-container'>
              <span className='summary-2'>@{event.summary} | </span>
              <span className='location'>{event.location}</span>
            </div>
          </div>
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