Feature: Home Page
    Testing myStays.com home page functionality 

@HomePage
Scenario: Verify the fields displayed in home page 
#Destination, Calendar, Search button, Location validation, Username, Language selection button.
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I verify the travel type headers displayed
    And I verify the destination field in Home page
    And I verify the Calendar displayed in Home page
    And I verify the date fields displayed
    And I verify the travellers input box
    And I verify the Search button displayed
    # And I verify the validation when clicked on Search button without entering Location
    And I verify the username displayed on top right
    And I verify the language selection displayed on top

# @HomePage
# Scenario: Verify the option to change language in Home Page
#     Given I can access to myStays.com
#     When I enter username and password 
#     And I click on Sign In button
#     Then I am on Home Page
#     And I verify the language selection displayed on top
#     And I select Français language
#     Then I verify the home page is displayed in Français
#     And I select English language
#     Then I verify the home page is displayed in English

@HomePage
Scenario: Verify the options displayed in the username drop down
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I click on the username drop down and verify the options displayed in the drop down
    

@HomePage
Scenario: Verify the user Logout in myStays.com
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I click on the username drop down 
    And I select Logout from the menu