Feature: Hotel Search
    Testing myStays.com hotel search results page  

@HotelSearch
Scenario Outline: As User, I can search Hotel in 'Paris'
    Given I can access to myStays.com
    When I login into myStays.com application using "<Username>" and "<Password>" 
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed

    Examples:
      | Username              | Password   | Destination |
      | testuser@gmail.com    | test@123!@#| PARIS       |

@HotelSearch
Scenario Outline: As User, I verify the number of hotels displayed
    Given I can access to myStays.com
    When I login into myStays.com application using "<Username>" and "<Password>" 
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the number of hotels displayed in "<Destination>"

    Examples:
      | Username              | Password   | Destination |
      | testuser@gmail.com    | test@123!@#| Paris       |

@HotelSearch
Scenario Outline: As User, I can search search hotel with specific name
    Given I can access to myStays.com
    When I login into myStays.com application using "<Username>" and "<Password>" 
    Then I am on Home Page
    When I search a hotel in "<Destination>"
    And I specify "<Hotel Name>" hotel name
    And I click on search button
    Then I verify the hotel search results displayed
    And First Result is "<Hotel Name>" hotel
    
    Examples:
      | Username              | Password   | Destination | Hotel Name|
      | testuser@gmail.com    | test@123!@#| PARIS       | Hilton |

@HotelSearchBookAndCancel 
Scenario Outline: As User, I can search, book & cancel Hotel with "<USER>"
    Given I can access to myStays.com
    When I login into myStays.com application using "<Username>" and "<Password>" 
    Then I am on Home Page
    When I search a hotel in "<Destination>"
    And I click on search button
    Then I verify the hotel search results displayed
    Then I click on Select and Reserve button
    And I enter necessary details
    And I click on Confirm button 

    Examples:
      | Username              | Password   | Destination | 
      | testuser@gmail.com    | test@123!@#| PARIS       |

@HotelSearch
Scenario Outline: As User, I can see datasource in Hotel Availability

    Given I can access to myStays.com
    When I login into myStays.com application using "<Username>" and "<Password>" 
    Then I am on Home Page
    Then I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed
    And I have results coming from "<DATASOURCE_TYPE>" hotel datasource

    Examples:
      |Username                  |Password    | DATASOURCE_TYPE  |
      |testuser@gmail.com        |test@123!@# | Djoca     |

@HotelSearch
Scenario Outline: As a User, i can see the Hotel safe logo for all applicable hotels

    Given I can access to myStays.com
    When I login into myStays.com application using "<Username>" and "<Password>" 
    Then I am on Home Page
    Then I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed
    And I see hotel safe logo in results

    Examples:
      | Username              | Password   | Destination | 
      | testuser@gmail.com    | test@123!@#| PARIS       |
