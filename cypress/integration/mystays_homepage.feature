Feature: Home Page
    Testing myStays.com home page functionality 

@HomePage
Scenario Outline: Verify the fields displayed in home page
    Given I can access to myStays.com
    When I login into myStays.com application using "<Username>" and "<Password>" 
    Then I am on Home Page
    # Then I enter location as 'PARIS' and click on Search button
    And I verify the destination field in Home page
    And I verify the Calendar displayed in Home page
    And I verify the Search button displayed
    And I verify the validation when clicked on Search button without entering Location
    And I verify the username displayed on top right
    And I verify the language selection displayed on top

    Examples:
      | Username              | Password   |
      | testuser@gmail.com    | test@123!@#|