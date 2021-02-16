import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: '24',
    errorText: ''
  };

  // When user changes number value
  handleChange = (event) => {
    const value = event.target.value;

    if (value < 0) {
      this.setState({
        errorText: 'Please enter a positive number of events.'
      });
    } else {
      this.props.updateEvents(null, value);
      this.setState({ numberOfEvents: value });
    }
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
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;