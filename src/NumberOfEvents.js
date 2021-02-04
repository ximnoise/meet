import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: '24',
  };

  // When user changes number value
  handleChange = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ numberOfEvents: value });
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className='NumberOfEvents'>
        <label>Number of events</label>
        <input
          type='number'
          className='number'
          value={numberOfEvents}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;