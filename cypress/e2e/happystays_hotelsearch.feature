Feature: Hotel Search
    Testing myStays.com hotel search results page  

@HotelSearch
Scenario Outline: As User, I can search Hotel in specified location
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed

    Examples:
      | Destination  |
      | London, UK   |

@HotelSearch
Scenario Outline: As User, I can search Hotel and verify the search option in search results page
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    # Then I verify the number of hotels displayed in "<Destination>"
    Then I verify the hotel search option in search results page
    And I verify the option to see the maximum of 6 hotel images

    Examples:
      | Destination |
      | London, UK  |

@HotelSearch @RoomDetails
Scenario Outline: As User, I can search Hotel and verify the see availability option
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed
    Then I click on See Avaialbility button
    And I verify the room details displayed

    Examples:
      | Destination     |
      | Paris, France   |

@HotelSearch
Scenario Outline: As User, I can search Hotel with more than 10 results
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify more than 10 hotel results are displayed

    Examples:
      | Destination     |
      | Paris, France   |

@HotelSearch
Scenario Outline: As User, I can search Hotel with less than 10 results
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify less than 10 hotel results are displayed

    Examples:
      | Destination    |
      | Paris |
      
@HotelSearch
Scenario Outline: As User, I can search Hotel for multiple nights
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>"
    And I search for 3 nights
    And I click on search button
    Then I see the text 3 night on search results page

    Examples:
      | Destination   |
      | London, UK    | 

# @HotelSearch
# Scenario Outline: As User, I can search search hotel with specific name
#     Given I can access to myStays.com
#     When I enter username and password 
#     Then I am on Home Page
#     # When I search a hotel in "<Destination>"
#     And I specify "<Hotel Name>" hotel name
#     And I click on search button
#     Then I verify the hotel search results displayed
#     And First Result is "<Hotel Name>" hotel
    
#     Examples:
#       | Destination | Hotel Name|
#       | PARIS       | Hilton |

# @HotelSearch
# Scenario Outline: As User, I can see datasource in Hotel Availability

#     Given I can access to myStays.com
#     When I enter username and password 
#     Then I am on Home Page
#     # Then I enter location as "<Destination>" and click on Search button
#     Then I verify the hotel search results displayed
#     And I have results coming from "<DATASOURCE_TYPE>" hotel datasource

#     Examples:
#       | Destination| DATASOURCE_TYPE  |
#       | Paris      | Djoca     |

# @HotelSearch
# Scenario Outline: As a User, i can see the Hotel safe logo for all applicable hotels

#     Given I can access to myStays.com
#     When I enter username and password 
#     Then I am on Home Page
#     # Then I enter location as "<Destination>" and click on Search button
#     Then I verify the hotel search results displayed
#     And I see hotel safe logo in results

#     Examples:
#       | Destination | 
#       | PARIS       |
