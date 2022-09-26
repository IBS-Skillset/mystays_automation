Feature: Login functionality
    Testing myStays.com login functionality 

Scenario Outline: As User, I can login into myStays.com using valid credentials
    Given I can access to myStays.com
    When I enter username "<Username>" and password "<Password>" 
    And I click on Sign In button
    Then I am on Home Page

    Examples:
      | Username              | Password   |
      | testuser@gmail.com    | test@123!@#|

Scenario Outline: As User, verify myStays.com login using invalid credentials
    Given I can access to myStays.com
    When I enter username "<Username>" and password "<Password>" 
    And I click on Sign In button and verify "<Message>" is displayed

    Examples:
      | Username          | Password       | Message  |
      | invalidusername   | test@123!@#    | Please include an '@' in the email address. 'invalidusername' is missing an '@'.|
      | invalidusername@  | test@123!@#    | Please enter a part following '@'. 'invalidusername@' is incomplete.|

Scenario Outline: As User, verify myStays.com login using empty username and password
    Given I can access to myStays.com
    When I enter username "<Username>" and password "<Password>" 
    And I click on Sign In button and verify "<Message>" is displayed

    Examples:
      | Username          | Password       | Message  |
      |                   |                | Please fill in this field| #empty username and password
      | invalid@gmail.com |                | Please fill in this field| #empty password
