Feature: Confirmation Page
    Testing HappyStays Confirmation page  

@BookConfirm 
Scenario Outline: As User, I can search and book a Hotel
    Given I can access to myStays.com
    When I enter username and password 
    And I click on Sign In button
    Then I am on Home Page
    And I enter location as "<Destination>" and click on Search button
    Then I verify the hotel search results displayed
    Then I click on See Avaialbility button
    Then I select room and click on Reserve button
    And I verify the details in confirm page
    # And I click on Confirm button 

    Examples:
      | Destination     |
      | Paris, France   |

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