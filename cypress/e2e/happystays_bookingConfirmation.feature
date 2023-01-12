Feature: Confirmation Page
    Testing HappyStays Confirmation page  

@BookConfirm 
Scenario Outline: As User, I can search a hotel and verify the hotel details in confirm page
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed
    Then I click on See Avaialbility button
    Then I select refundable room and click on Reserve button
    And I verify the hotel details displayed in confirm page

    Examples:
      | Destination     |
      | Paris, France   |

@BookConfirm 
Scenario Outline: As User, I can search a hotel and verify the fields displayed in confirm page
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed
    Then I click on See Avaialbility button
    Then I select refundable room and click on Reserve button
    And I verify the hotel details displayed in confirm page
    And I verify the user details populated in confirm page

    Examples:
      | Destination     |
      | Paris, France   |

@BookConfirm 
Scenario Outline: As User, I can verify the payment field validations in confirm page
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed
    Then I click on See Avaialbility button
    Then I select refundable room and click on Reserve button
    And I verify the hotel details displayed in confirm page
    And I click on BookNow button 
    And I verify the validations displayed in Payment section

    Examples:
      | Destination     |
      | Paris, France   |

@BookConfirm 
Scenario Outline: As User, I can search and book a hotel
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed
    Then I click on See Avaialbility button
    Then I select refundable room and click on Reserve button
    And I verify the hotel details displayed in confirm page
    And I enter the payment details in confirm page
    And I click on BookNow button 
    And I verify the hotel booking is successful
    And I verify the booked hotel is displayed in My Trips

    Examples:
      | Destination     |
      | Paris, France   |

@MyTrips
Scenario: As User, I can verify the trips displayed in My Trips
     Given I can access to myStays.com
     When I enter username and password 
     And I click on Sign In button
     Then I am on Home Page
     And I select My Trips from the drop down 
     And I verify the details displayed in My Trips
    #  And I verify the booked hotel is displayed in My Trips


#@HotelBook     
# Scenario Outline: As User, I can search, book & cancel Hotel with "<USER>"
#     Given I can access to myStays.com
#     When I enter username and password 
#     And I click on Sign In button
#     Then I am on Home Page
#     And I enter location as "<Destination>" and click on Search button
#     Then I verify the hotel search results displayed
#     Then I click on See Avaialbility button
#     Then I select room and click on Reserve button
#     # And I enter necessary details
#     # And I click on Confirm button 

#     Examples:
#       | Destination | 
#       | PARIS       |