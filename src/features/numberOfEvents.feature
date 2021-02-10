Feature: Specify number of events

Scenario: When the user hasn't specified a number, 24 is the default number
Given the main page is open
When the app is rendered
Then the app will display 24 events

Scenario: User can change the number of events they want to see
Given the list of upcoming events is displayed
When the user enters a number into the `number of events` input box
Then the user will see the number of events they specified