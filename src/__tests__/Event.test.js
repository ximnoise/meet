import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0]; // Mock event prop
    EventWrapper = shallow(<Event event={event} />);
  });

  // Component props
  test('should render with correct event prop', () => {
    expect(EventWrapper.instance().props.event).toEqual(event);
  });

  test('should render event summary correctly', () => {
    expect(EventWrapper.find('.summary').text()).toBe(event.summary);
  });

  test('should render event location correctly', () => {
    expect(EventWrapper.find('.location').text()).toBe(event.location);
  });

  test('should render details button', () => {
    expect(EventWrapper.find('.btn-details')).toHaveLength(1);
  });

  // Component state
  test('should render event component state correctly', () => {
    expect(EventWrapper.state('isExpanded')).toBe(false);
  });

  // Component state change (collapsed event -> expanded event)
  test('clicking "show-details" button should expand event component', () => {
    EventWrapper.find('.btn-details').simulate('click');
    expect(EventWrapper.state('isExpanded')).toBe(true);
  });

  test('expanded event should render event html link correctly', () => {
    expect(EventWrapper.find('.link').props().href).toBe(event.htmlLink);
  });

  test('expanded event should render event description correctly', () => {
    expect(EventWrapper.find('.description').text()).toBe(event.description);
  });

  // Component state change (expanded event -> collapsed event)
  test('expanded event should collapse when details button is clicked', () => {
    EventWrapper.find('.btn-details').simulate('click');
    expect(EventWrapper.state('isExpanded')).toBe(false);
  });

  test('expanded event component should no longer be present after collapsing event', () => {
    expect(EventWrapper.find('.Expanded-Event')).toHaveLength(0);
  });
});