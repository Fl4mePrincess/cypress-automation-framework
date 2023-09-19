@regression
Feature: webdriveruniversity - Homepage

    Background:
        Given I navigate to the webdriveruniversity homepage

    Scenario: Selecting the checboxes page
        When I click the checkboxes button
        Then the checkboxes page is displayed

    Scenario: Selecting the checboxes page
        When I click the To-Do List button
        Then the button click page is displayed

    Scenario: Selecting the AJAX Loader page
        When I click the AJAX Loader button
        Then the AJAX loader page is displayed