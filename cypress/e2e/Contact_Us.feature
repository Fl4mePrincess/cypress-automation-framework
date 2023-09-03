@contact-us @regression

Feature: WebdriverUniversity - Contact Us Page

    Background: Pre conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comments
        And I click the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comments
        And I click the submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I type a specific email address "sw@mail.com"
        And I type a specific word "hello world" and a number of 6788 within the comment input field
        And I click the submit button
        Then I should be presented with a successful contact us submission message
    @smoke
    Scenario Outline: Validate contact us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type an '<emailAddress>' and a comment '<comment>'
        And I click the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress  | comment                 | message                      |
            | John      | Jones    | jj@mail.com   | Hello how are you?      | Thank You for your Message!  |
            | Mia       | Carter   | mc11@mail.com | Test 123 test321        | Thank You for your Message!  |
            | Fred      | Banana   | fredb         | Do you create websites? | Error: Invalid email address |

