Feature: Login
    Testing myStays.com login functionality 

@SignIn
Scenario Outline: As User, I can login into myStays.com application using valid credentials
    Given I can access to myStays.com
    When I enter username "<Username>" and password "<Password>" 
    And I click on Sign In button
    Then I am on Home Page

    Examples:
      | Username              | Password   |
      | testuser@gmail.com    | test@123!@#|

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
Scenario Outline: As User, verify myStays.com login using valid username and empty password
    Given I can access to myStays.com
        And I click on Sign In button and verify "<Message>" is displayed
    
    Examples:
     | Please fill in this field.| #empty username and password
