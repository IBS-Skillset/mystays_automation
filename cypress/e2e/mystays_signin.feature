Feature: Login
    Testing myStays.com login functionality 

@SignIn
Scenario: As User, I can login into myStays.com application using valid credentials
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page

@SignIn 
Scenario Outline: As User, verify myStays.com login using invalid credentials
    Given I can access to myStays.com
    When I enter username "<Username>" and password "<Password>" 
    And I click on Sign In button and verify "<Message>" is displayed

    Examples:
      | Username          | Password       | Message  |
      | invalidusername   | test@123!@#    | Please include an '@' in the email address. 'invalidusername' is missing an '@'.|
      | invalidusername@  | test@123!@#    | Please enter a part following '@'. 'invalidusername@' is incomplete.|

@SignIn
Scenario Outline: As User, verify myStays.com login using empty username and valid password
    Given I can access to myStays.com
    When I enter password "<Password>" 
    And I click on Sign In button and verify "<Message>" is displayed

    Examples:
       | Password    | Message  |
       | test@123!@# | Please fill in this field.|

@SignIn
Scenario Outline: As User, verify myStays.com login using valid username and empty password
    Given I can access to myStays.com
    When I enter password "<Password>" 
    And I click on Sign In button and verify "<Message>" is displayed

    Examples:
      | Username           | Message |
      | testuser@gmail.com | Please fill in this field.|

@SignIn
Scenario Outline: As User, verify myStays.com login using empty username and empty password
    Given I can access to myStays.com
    And I click on Sign In button and verify "<Message>" is displayed
    
    Examples:
     | Message |
     | Please fill in this field.|
