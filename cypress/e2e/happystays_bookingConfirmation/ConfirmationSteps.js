import {
    Given,
    When,
    Them,
    And,
    Then,
    Before,
    beforeEach,
    After,
  } from 'cypress-cucumber-preprocessor/steps'
  import Common from '../pages/Common.js'
  import SignInPage from '../pages/SigninPage.js'
  import HomePage from '../pages/HomePage.js'
  import SearchResultsPage from '../pages/SearchResultsPage.js'
  import RoomDetailsPage from '../pages/RoomDetailsPage.js'
  import ConfirmationPage from '../pages/ConfirmationPage.js'
  
  const signinPage = new SignInPage()
  const common = new Common()
  const homePage = new HomePage()
  const searchResults = new SearchResultsPage()
  const roomDetails = new RoomDetailsPage()
  const confirmPage=new ConfirmationPage()
  
  And('I verify the hotel details displayed in confirm page',()=>{
    confirmPage.verifyDetails()
  })
  And('I enter the user details in confirm page',()=>{

  })
  And('I verify the payment options in confirm page',()=>{

  })
  And('I verify the hotel booking is successful',()=>{
    confirmPage.verifyBookingMessage()
  })
  And('I verify the booked hotel is displayed in My Trips',()=>{
    confirmPage.verifyMyTrips()
  })