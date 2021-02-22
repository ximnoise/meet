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

    if (value < 1) {
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
        <label className="eventNumLabel">Number of Events:</label>
        <input
          type='number'
          className='eventNumInput'
          value={numberOfEvents}
          onChange={this.handleChange}
        />
        <div id='ErrorAlert'>
          <ErrorAlert text={this.state.errorText}/>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;