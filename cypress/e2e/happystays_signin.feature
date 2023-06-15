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
    And I click on Sign In button and verify "<Message>" is displayed for "<Password>"

    Examples:
      | Username          | Password       | Message  | 
      | invalidusername   | test@123!@#    | Please include an '@' in the email address. 'invalidusername' is missing an '@'.|
      | invalidusername@  | test@123!@#    | Please enter a part following '@'. 'invalidusername@' is incomplete.|
      | test@gmail.com    | invalidpwd     | Invalid Credentials. Please Sign in again! | 

@SignIn
Scenario Outline: As User, verify myStays.com login using empty username and valid password
    Given I can access to myStays.com
    When I enter password "<Password>" 
    And I click on Sign In button and verify "<Message1>" or "<Message2>" is displayed

    Examples:
       | Password    | Message1                  | Message2                    |
       | test@123!@# | Please fill in this field.| Please fill out this field. |

@SignIn
Scenario Outline: As User, verify myStays.com login using valid username and empty password
    Given I can access to myStays.com
    When I enter password "<Password>" 
    And I click on Sign In button and verify "<Message1>" or "<Message2>" is displayed

    Examples:
      | Username           | Message1                   | Message2                    |
      | testuser@gmail.com | Please fill in this field. | Please fill out this field. |

@SignIn
Scenario Outline: As User, verify myStays.com login using empty username and empty password
    Given I can access to myStays.com
    And I click on Sign In button and verify "<Message1>" or "<Message2>" is displayed
    
    Examples:
     | Message1                  | Message2                   |
     | Please fill in this field.| Please fill out this field.|
