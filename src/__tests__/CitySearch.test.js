import React from 'react';
import { shallow, mount } from 'enzyme';
import CitySearch from '../CitySearch';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe('<CitySearch /> component', () => {
  let locations, CitySearchWrapper, updateEvents;
  beforeAll(() => {
    locations = extractLocations(mockData);
    updateEvents = () => null;
    CitySearchWrapper = shallow(
      <CitySearch locations={locations} updateEvents={updateEvents} />
    );
  });

  test('should render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  test('should hide list of suggestions by default', () => {
    expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
  });

  test('should render a list of search suggestions when user enters query', () => {
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
  });

  test('should render text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

  test('should change state when text input changes', () => {
    CitySearchWrapper.setState({
      query: 'Munich',
    });
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  test('should render list of suggestions correctly', () => {
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(
      suggestions.length + 1
    );

    for (let i = 0; i < suggestions.length; i++) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(
        suggestions[i]
      );
    }
  });

  test('suggestion list should match the query when changed', () => {
    CitySearchWrapper.setState({ query: '', suggestions: [] });
    CitySearchWrapper.find('.city').simulate('change', {
      target: { value: 'Berlin' },
    });
    const query = CitySearchWrapper.state('query');
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations);
  });

  test('selecting a suggestion should change query state', () => {
    CitySearchWrapper.setState({
      query: 'Berlin',
    });
    const suggestions = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe(suggestions[0]);
  });

  test('selecting CitySearch input reveals the suggestions list', () => {
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({
      display: 'none',
    });
  });

  test('selecting a suggestion should hide the suggestions list', () => {
    CitySearchWrapper.setState({
      query: 'Berlin',
      showSuggestions: undefined,
    });
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({
      display: 'none',
    });
  });

  test('suggestions list will appear upon having a focus on city input field', () => {
    CitySearchWrapper.setState({
      query: '',
      suggestions: locations,
    });
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({});
  });
});

describe('<CitySearch /> integration', () => {
  test('should get list of events after user selects a city', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value');
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalled();
  });
});