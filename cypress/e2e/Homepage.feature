@regression
Feature: webdriveruniversity - Homepage

Scenario: Homepage

Given I navigate to the webdriveruniversity homepage
When I click the checkboxes button
Then the checkboxes page is displayed

Given I navigate to the webdriveruniversity homepage
When I click the To-Do List button
Then the button click page is displayed