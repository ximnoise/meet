import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: '12'
  };

  handleEventInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ numberOfEvents: value });
  };

  render() {
    const { numberOfEvents } = this.state;

    return (
      <div className="NumberOfEvents">
        <label>Number of Events: </label>
        <input
          type="number"
          className="event-number-input"
          value={numberOfEvents}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;