Feature: Signup
    Testing myStays.com Signup functionality 

@Signup
Scenario Outline: As a new user, I can create an account in myStays.com application
    Given I can access to myStays.com
    When I click on Create account button in Sign In page
    And I enter valid "<Emailaddress>" and "<Firstname>" and "<Lastname>" and "<Phonenumber>" and "<Password>"
    And I click on Continue button
    Then I verify the account is created successfully
    And I am on Sign In page with "<Emailaddress>" in username field

    Examples:
    |Emailaddress   | Firstname         | Lastname         |Password | Phonenumber   |
    |test@gmail.com |TestFirstName      | TestLastName     |test@123 | +919567911083  |

@Signup
Scenario Outline: Verify the validation in Email address/ Phone number field when invalid values are entered
    Given I can access to myStays.com
    When I click on Create account button in Sign In page
    And I enter valid "<Emailaddress>" and "<Firstname>" and "<Lastname>" and "<Phonenumber>" and "<Password>"
    And I click on Continue button and verify "<Message>" is displayed

    Examples:
    |Emailaddress      | Firstname| Lastname |Phonenumber | Password   | Message |
    |test              |Test      | User     |+919567911083 |test@123  |Invalid email|
    |Testuser@gmail.com|Test      | User     |9567  |test@123  |Please enter contact number with country code | 

@Signup
Scenario: Verify the field validations when no values are entered in 'Create an account' page and clicked on Continue button
    #Email, First Name, Last Name
    Given I can access to myStays.com
    When I click on Create account button in Sign In page
    And I click on Continue button and verify the message displayed