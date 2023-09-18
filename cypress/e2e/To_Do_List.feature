@regresion
Feature: To-Do-List page selections

Background:
Given I navigate to the webdriveruniversity homepage
When I click the To-Do List button

Scenario: Checking off the first list item
And I select the first list item
Then the first item is marked as completed

Scenario: Adding a new list item
And I select the plus icon to add a new list item
And I type a new list item into the text field "Feed the dragons" and press enter
Then the new list item is added to the To-Do list
