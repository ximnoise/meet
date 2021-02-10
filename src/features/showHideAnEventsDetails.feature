Feature: Show/hide an event’s details

Scenario: An event element is collapsed by default
Given the main page is open
When the app is rendered
Then the user should see a list of collapsed event elements

Scenario: User can expand an event to see its details
Given the list of upcoming events is displayed
When the user clicks `show details` button on the event element
Then the user should see expanded event element with its details

Scenario: User can collapse an event to hide its details
Given the user has clicked `show details` on an event element
When the user clicks `hide details` on the event element
Then the event element will close and the user will see the list of collapsed event elements