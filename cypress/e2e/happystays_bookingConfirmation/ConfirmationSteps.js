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
  And('I verify the validations displayed in Payment section',()=>{
    confirmPage.verifyPaymentValidations()
  })
  And('I verify the hotel booking is successful',()=>{
    confirmPage.verifyBookingMessage()
  })
  And('I verify the details displayed in My Trips',()=>{
    confirmPage.verifyMyTripsDetails()
  })
  And('I verify the booked hotel is displayed in My Trips',()=>{
    confirmPage.verifyMyTrips()
  })