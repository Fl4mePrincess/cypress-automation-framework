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