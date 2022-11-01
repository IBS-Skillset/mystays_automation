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
      | Destination |
      | London       |

@HotelSearch
Scenario Outline: As User, I can search Hotel  and verify the number of hotels displayed
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the number of hotels displayed in "<Destination>"

    Examples:
      | Destination |
      | Paris       |

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

# @HotelSearchBookAndCancel 
# Scenario Outline: As User, I can search, book & cancel Hotel with "<USER>"
#     Given I can access to myStays.com
#     When I enter username and password 
#     Then I am on Home Page
#     # When I search a hotel in "<Destination>"
#     And I click on search button
#     Then I verify the hotel search results displayed
#     Then I click on Select and Reserve button
#     And I enter necessary details
#     And I click on Confirm button 

#     Examples:
#       | Destination | 
#       | PARIS       |

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
