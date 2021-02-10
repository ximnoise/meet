import React from 'react';
import App from '../App';
import Event from '../Event';
import NumberOfEvents from '../NumberOfEvents';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, test => {
  test('When the user hasn\'t specified a number, 24 is the default number', ({ given, when, then }) => {
    let AppWrapper;

    given('the main page is open', () => {});
    when('the app is rendered', () => {
      AppWrapper = mount(<App />);
    });
    then('the app will display 24 events', () => {
      AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;

    given('the list of upcoming events is displayed', () => {
      AppWrapper = mount(<App />);
    });
    when('the user enters a number into the `number of events` input box', () => {
      const eventObject = { target: { value: '1' } };
      AppWrapper.find('.number').simulate('change', eventObject);
    });
    then('the user will see the number of events they specified', () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('1');
    });
  });
});