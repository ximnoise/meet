import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.event-number-input')).toHaveLength(1);
  });

  test('render placeholder to be "Enter number of events"', () => {
    expect(NumberOfEventsWrapper.find('.event-number-input').at(0).props().placeholder).toEqual('Enter Number of Events');
  });

  test('check input default value is equal to 32', () => {
    expect(NumberOfEventsWrapper.find('.event-number-input').at(0).props().value).toEqual(32);
  });

  test('check on input a number', () => {
    const eventValue = { target: { value: 8 } };
    NumberOfEventsWrapper.find('.event-number-input').simulate('change', eventValue);
    expect(NumberOfEventsWrapper.state('eventValue')).toBe(8);
  });
  
});