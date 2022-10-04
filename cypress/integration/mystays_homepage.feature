Feature: Home page validations
    Testing myStays.com login functionality 

Scenario: Verify the fields displayed in home page
    Given I can access to myStays.com
    When I enter username "<Username>" and password "<Password>" 
    And I click on Sign In button
    Then I am on Home Page
    

Scenario Outline: Verify the hotel search results displayed

    Given I can access to myStays.com
    When I enter username "<Username>" and password "<Password>" 
    And I click on Sign In button
    Then I am on Home Page
    Then I enter location as 'PARIS' and click on Search button
    # And I verify the destination field in Home page
    # And I verify the Calendar displayed in Home page
    # And I verify the Search button displayed
    # And I verify the username displayed on top right
    # And I verify the language selection displayed on top

        Examples:
      | Username              | Password   |
      | testuser@gmail.com    | test@123!@#|