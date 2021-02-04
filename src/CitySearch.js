import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
    locations: this.props.locations,
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  // Displays suggestions based on user input (autocomplete feature)
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true})

    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  render() {
    const { query, suggestions, showSuggestions } = this.state;

    return (
      <div className='CitySearch'>
        <label>Choose your nearest city</label>
        <input
          type='text'
          className='city'
          value={query}
          onChange={this.handleChange}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />
        <ul
          className='suggestions'
          style={showSuggestions ? {} : { display: 'none' }}
        >
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key='all' onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;