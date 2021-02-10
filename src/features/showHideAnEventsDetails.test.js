import React from 'react';
import App from '../App';
import Event from '../Event';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;

    given('the main page is open', () => {});
    when('the app is rendered', () => {
      AppWrapper = mount(<App />);
    });
    then('the user should see a list of collapsed event elements', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event-Expanded')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;

    given('the list of upcoming events is displayed', async () => {
      AppWrapper = await mount(<App />);
      await AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
    });
    when('the user clicks `show details` button on the event element', () => {
      AppWrapper.update();
      AppWrapper.find('.event .btn-details').at(0).simulate('click');
    });
    then('the user should see expanded event element with its details', () => {
      expect(AppWrapper.find('.event .Expanded-Event')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;

    given('the user has clicked `show details` on an event element', async () => {
      AppWrapper = await mount(<App />);
      await AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
      AppWrapper.find('.event .btn-details').at(0).simulate('click');
      expect(AppWrapper.find('.event .Expanded-Event')).toHaveLength(1);
    });
    when('the user clicks `hide details` on the event element', () => {
      AppWrapper.find('.event .btn-details').at(0).simulate('click');
    });
    then('the event element will close and the user will see the list of collapsed event elements', () => {
      expect(AppWrapper.find('.event .Expanded-Event')).toHaveLength(0);
    });
  });
});
