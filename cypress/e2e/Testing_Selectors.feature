@regression
Feature: Testing different selectors

    Background:

        Given I navigate to the selectors webdriveruniversity page

    Scenario: Selecting a top image button
        When I click the WebIO image
        Then the webIO pop up is displayed

    Scenario: Selecting the first radio button
        When I select the first radio button
        Then the radio button is selected

    Scenario: Cycling through radio buttons
        When I select each radio button
        Then each radio button is selected

    Scenario: Selecting a checkbox
        When I select the first checkbox option
        Then the first checkbox is checked

    Scenario: Unselecting a checkbox
        When I uncheck a selected checkbox
        Then the check box is unchecked

    Scenario: Selecting all the checkboxes
        When I select all the checkboxes
        Then all the checkboxes are checked