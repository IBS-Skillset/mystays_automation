Feature: Hotel Search
    Testing myStays.com hotel description page  
    
@HotelDescription @RoomDetails
Scenario Outline: As User, I can search Hotel and verify the hotel description page
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed
    Then I click on See Avaialbility button
    And I verify Overview tab is active by default
    And I verify the room details displayed

    Examples:
      | Destination     |
      | Paris, France   |

# @HotelDescription @RoomDetails
# Scenario Outline: As User, I can search Hotel and verify the option to see hotel images
#     Given I can access to myStays.com
#     When I enter username and password 
#     And I click on Sign In button
#     Then I am on Home Page
#     And I enter location as "<Destination>" and click on Search button
#     Then I verify the hotel search results displayed
#     Then I click on See Avaialbility button
#     And I verify the option to see hotel images

#     Examples:
#       | Destination     |
#       | Paris, France   |

# @HotelDescription @RoomDetails
# Scenario Outline: As User, I can search Hotel and verify the Facilities displayed
#     Given I can access to myStays.com
#     When I enter username and password 
#     And I click on Sign In button
#     Then I am on Home Page
#     And I enter location as "<Destination>" and click on Search button
#     Then I verify the hotel search results displayed
#     Then I click on See Avaialbility button
#     And I verify the address displayed in Overview section
#     And I verify the Facilities displayed in description page (maximum 12)

#     Examples:
#       | Destination     |
#       | Paris, France   |

# @HotelDescription @RoomDetails
# Scenario Outline: As User, I can search Hotel and verify the Reserve
#     Given I can access to myStays.com
#     When I enter username and password 
#     And I click on Sign In button
#     Then I am on Home Page
#     And I enter location as "<Destination>" and click on Search button
#     Then I verify the hotel search results displayed
#     Then I click on See Avaialbility button
#     Then I select room and verify selected room is highlighted
#     And I verify Reserve button is displayed
    
#     Examples:
#       | Destination     |
#       | Paris, France   |
    
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
