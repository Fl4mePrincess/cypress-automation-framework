@regression
Feature: webdriveruniversity - DROPDOWN, CHECKBOX & RADIO BUTTON page

Background: Pre conditions

Given I navigate to the webdriveruniversity homepage
When I click the checkboxes button

Scenario: Selecting a check box
And I select a check box
Then the check box is marked checked

Scenario: Unselecting a check box
And I click a checkbox that is already checked
Then the check box is no longer checked
