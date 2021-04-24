# Meet

Meet App is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events. The serverless function is hosted by the cloud provider AWS.

Meet App alows users to search for events hosted in a specified city. The user can view charts that display how many events will take place in that specified city as well the popularity of event genres in form of a pie chart.

## How To Use

- Go to this homepage: https://ximnoise.github.io/meet/
- Sign in with a Google Account

## Technologies

- Requires [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com)
- Written with [React](https://reactjs.org)
- TDD [Jest](https://jestjs.io)
- Serverless function [AWS-Lambda](https://aws.amazon.com/lambda/)
- API [Google Calendar](https://developers.google.com/calendar/)

## Features

Described in terms of user stories and scenarios

*FEATURE 1: FILTER EVENTS BY CITY*

#### User Story:

- As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

#### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities

- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see the list of upcoming events.

#### Scenario 2: User should see a list of suggestions when they search for a city

- Given the main page is open
- When the user starts typing in the city textbox
- Then the user should receive a list of cities (suggestions) that match what they’ve typed

#### Scenario 3: User can select a city from the suggested list

- Given user was typing “Berlin” in the city textbox and the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

*FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS*

#### User Story:

- As a user, I should be able to show/hide event details so that I can see more/less information about an event

#### Scenario 1: An event element is collapsed by default

- Given the main page is open
- When the app is rendered
- Then the user should see a list of collapsed event elements

#### Scenario 2: User can expand an event to see its details

- Given the list of upcoming events is displayed
- When the user clicks `show details` button on the event element
- Then the user should see expanded event element with its details

#### Scenario 3: User can collapse an event to hide its details

- Given the user has clicked `show details` on an event element
- When the user clicks `hide details` on the event element
- Then the event element will close and the user will see the list of collapsed event elements

*FEATURE 3: SPECIFY NUMBER OF EVENTS*

#### User Story:

- As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

#### Scenario 1: When user hasn’t specified a number, 24 is the default number

- Given the main page is open
- When the app is rendered
- Then the app will display 24 events

#### Scenario 2: User can change the number of events they want to see

- Given the list of upcoming events is displayed
- When the user enters a number into the `number of events` input box
- Then the user will see the number of events they specified

*FEATURE 4: USE THE APP WHEN OFFLINE*

#### User Story:

- As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.

#### Scenario 1: Show cached data when there’s no internet connection

- Given there is no internet connection
- When the app is rendered
- Then cached data will be displayed

#### Scenario 2: Show error when user changes the settings (city, time range)

- Given there is no internet connection
- When the user changes the settings
- Then display an error message

*FEATURE 5: DATA VISUALIZATION*

#### User Story:

- As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

#### Scenario 1: Show a chart with the number of upcoming events in each city

- Given the main page is open
- When the app is rendered
- Then show a chart with the number of upcoming events in each city