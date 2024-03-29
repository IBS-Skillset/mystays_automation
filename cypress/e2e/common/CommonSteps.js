/* eslint-disable cypress/no-unnecessary-waiting */
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

After(() => {
  // runs once all tests are done
  common.verifyBrandBanner()
  common.verifyFooterPresent()
})

Given('I can access to myStays.com', () => {
  cy.visit(Cypress.env('awsurl'))
  // cy.visit('/')
  // cy.viewport('iphone-6')
})
When('I enter username and password', function () {
  signinPage.typeFixturesUsername(this.data.username)
  signinPage.typeFixturesPassword(this.data.password)
})
When('I login into myStays.com application using {string} and {string}',
  (username, password) => {
    signinPage.typeUsername(username)
    signinPage.typePassword(password)
    signinPage.clickSigninButton()
    homePage.verifyHomePage()
    cy.log('Successfully logged into application')
  },
)
And('I click on Sign In button', () => {
  signinPage.clickSigninButton()
})
Then('I am on Home Page', function () {
  homePage.verifyHomePage() // home page launched validation
  // common.verifyUsername(this.data.UserFullName)
  cy.log('Successfully logged into application')
})
And('I select My Trips from the drop down',()=>{
  homePage.selectMyTrips()
})
And('I verify the username displayed on top right', () => {
  common.getUsername()
})
And('I enter location as {string} and click on Search button', (location) => {
  searchResults.verifyLocationField()
  homePage.typeAndSelectLocation(location)
  homePage.selectFromAndToDate()
  homePage.clickSearchButton()
})
When('I search a hotel in {string}', (location) => {
  searchResults.verifyLocationField()
  homePage.typeAndSelectLocation(location)
  cy.wait(5000)
  homePage.selectFromAndToDate()
})
And('I click on search button', () => {
  homePage.clickSearchButton()
})
And('I enter location as {string}', (location) => {
  searchResults.verifyLocationField()
  homePage.typeAndSelectLocation(location)
})
Then('I verify the hotel search results displayed', () => {
  searchResults.displayHotelDetails()
})
Then('I click on See Avaialbility button', () => {
  searchResults.clickOnSeeAvaialabilityButton()
})
And('I verify the room details displayed', () => {
  roomDetails.verifyRoomType()
})
Then('I select refundable room and click on Reserve button', () => {
  roomDetails.getHotelDetails()
  roomDetails.selectRefundableRoomAndReserve()
})
And('I enter the payment details in confirm page',function(){
  confirmPage.fillPaymentInfo(this.data.PaymentDetails.cardHolderName,this.data.PaymentDetails.cardNumber,this.data.PaymentDetails.expiryDate,this.data.PaymentDetails.cvv)
})
And('I click on BookNow button',()=>{
  confirmPage.clickBookNowButton()
})
And('I verify the user details populated in confirm page',function (){
  confirmPage.verifyUserDetails(this.data.userFirstName, this.data.userLastName, this.data.username, this.data.MobilePhone)
})
