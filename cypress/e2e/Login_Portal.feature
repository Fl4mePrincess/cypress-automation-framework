@login @regression

Feature: WebdriverUniversity - Login Page

        Background: Pre conditions
                When I wait for 1 seconds


        Scenario Outline: Validate login page
                Given I navigate to the webdriveruniversity homepage
                When I click the login portal button
                And I type a username <userName> and password <password>
                And I click the login button
                Then I should be presented with a alert box which contains text '<alertText>'

                Examples:

                        | userName  | password     | alertText            |
                        | webdriver | webdriver123 | validation succeeded |
                        | webdriver | bananas      | validation failed    |
                        | joe       | webdriver123 | validation failed    |