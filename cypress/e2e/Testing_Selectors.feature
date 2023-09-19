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

    Scenario: Selecting a the first checkbox
        When I select the first checkbox option
        Then the first checkbox is checked

    Scenario: Unselecting a checkbox
        When I uncheck a selected checkbox
        Then the check box is unchecked

    Scenario: Selecting and unselecting all the checkboxes
        When I select all the checkboxes
        And I unselect all the checkboxes
        Then all the checkboxes are unchecked
        
    Scenario: Selecting a drop down list
        When I select a specific option from the fruits drop down menu 
        Then the selection appears in the drop down box    