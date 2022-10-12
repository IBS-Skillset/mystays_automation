Feature: Hotel Search
    Testing myStays.com hotel search results page  

Scenario Outline: As User, I can search Hotel in 'Paris'
    Given I can access to myStays.com
    When I login into myStays.com application using "<Username>" and "<Password>" 
    Then I am on Home Page
    Then I enter location as 'PARIS' and click on Search button
    Then I verify the hotel search details displayed

    Examples:
      | Username              | Password   |
      | testuser@gmail.com    | test@123!@#|