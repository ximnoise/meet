import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event />, component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  })

  test('render correct event details', () => {
    expect(EventWrapper.find('.event-container')).toHaveLength(1);
  });

  test('render show event-details', () => {
    EventWrapper.setState({ showHideDetails: true });
    EventWrapper.find('.show-hide-btn').simulate('click');
  });

  test('render hide event-details', () => {
    EventWrapper.setState({ showHideDetails: false });
    EventWrapper.find('.show-hide-btn').simulate('click');
  });

});