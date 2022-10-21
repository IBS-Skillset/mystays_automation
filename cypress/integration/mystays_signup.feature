Feature: Signup
    Testing myStays.com Signup functionality 

@Signup
Scenario Outline: As a new user, I can create an account in myStays.com
    Given I can access to myStays.com
    When I click on Create account button in Sign In page
    And I enter valid "<Emailaddress>" and "<Firstname>" and "<Lastname>" and "<Phonenumber>" and "<Password>"
    And I click on Continue button
    Then I verify the account is created successfully
    And I am on Sign In page

    Examples:
    |Emailaddress      | Firstname| Lastname |Password | Phonenumber   |
    |testuser@gmail.com|Test      | User     |test@123 | +919567911083  |

@Signup
Scenario Outline: Verify the validation in Email address and Phone number fields when invalid values are entered
    Given I can access to myStays.com
    When I click on Create account button in Sign In page
    And I enter valid "<Emailaddress>" and "<Firstname>" and "<Lastname>" and "<Password>" and "<Phonenumber>"
    And I click on Continue button and verify "<Message>" is displayed

    Examples:
    |Emailaddress      | Firstname| Lastname |Password | Phonenumber   | Message |
    |test              |Test      | User     |test@123 |+919567911083  |Invalid email|
    |Testuser@gmail.com|Test      | User     |test@123 |9              |Please enter contact number with country code | 
    #unable to capture invalid phone number pop up message 

@Signup
Scenario: Verify the field validations when no values are entered in 'Create an account' page
    Given I can access to myStays.com
    When I click on Create account button in Sign In page
    And I click on Continue button and verify the message displayed