# Objective
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.


___

## User Stories:

*FEATURE 1: FILTER EVENTS BY CITY*

As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

*FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS*

As a user, I should be able to show/hide event details so that I can see more/less information about an event.

*FEATURE 3: SPECIFY NUMBER OF EVENTS*

As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

*FEATURE 4: USE THE APP WHEN OFFLINE*

As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.

*FEATURE 5: DATA VISUALIZATION*

As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

*FEATURE 6: ADD AN APP SHORTCUT TO THE HOME SCREEN*

As a user, I should be able to add the app shortcut to my home screen so that I can open the app faster.

___

## Brief Scenarios for the key features of the app:

*FEATURE 1: FILTER EVENTS BY CITY*

**Scenario 1:** When user hasn’t searched for a city, show upcoming events from all cities.

**Scenario 2:** User should see a list of suggestions when they search for a city.

**Scenario 3:** User can select a city from the suggested list.

*FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS*

**Scenario 1:** An event element is collapsed by default.

**Scenario 2:** User can expand an event to see its details.

**Scenario 3:** User can collapse an event to hide its details.

*FEATURE 3: SPECIFY NUMBER OF EVENTS*

**Scenario 1:** When user hasn’t specified a number, 32 is the default number.

**Scenario 2:** User can change the number of events they want to see.

*FEATURE 4: USE THE APP WHEN OFFLINE*

**Scenario 1:** Show cached data when there’s no internet connection.

**Scenario 2:** Show error when user changes the settings (city, time range).

*FEATURE 5: DATA VISUALIZATION*

**Scenario 1:** Show a chart with the number of upcoming events in each city.

*FEATURE 6: ADD AN APP SHORTCUT TO THE HOME SCREEN*

This is handled by the user’s OS, so no scenarios have been created for this feature.
