import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color
    };
  }

  render() {
    return (
      <div className='Alert'>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#4285f4';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#f0f8ff';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#c51f5d';
  }
}

export { InfoAlert, WarningAlert, ErrorAlert };