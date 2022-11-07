import { Given,When, Them, And, Then } from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import HomePage from "../pages/HomePage.js";
import SearchResultsPage from "../pages/SearchResultsPage.js";

const signinPage = new SignInPage()
const common = new Common();
const homePage = new HomePage();
const searchResults = new SearchResultsPage();

Given('I can access to myStays.com', () => {
    cy.visit("/")
    common.verifyBrandBanner()
    common.verifyFooterPresent()
})

When('I enter username and password', () => {
    signinPage.typeFixturesUsername()
    signinPage.typeFixturesPassword()
})

When('I login into myStays.com application using {string} and {string}', (username, password) => {
    signinPage.typeUsername(username)
    signinPage.typePassword(password)
    signinPage.clickSigninButton()
    homePage.verifyHomePage()
    cy.log("Successfully logged into application")
})

And('I click on Sign In button', () => {
    signinPage.clickSigninButton()
})

Then('I am on Home Page', () => {
    homePage.verifyHomePage() // home page launched validation
    common.verifyBrandBanner()
    common.verifyFooterPresent()
    common.verifyUsername()
    cy.log("Successfully logged into application")
})
And('I verify the username displayed on top right', () => {
    common.getUsername()
})
And('I enter location as {string} and click on Search button', (location) => {
    searchResults.verifyLocationField()
    homePage.typeAndSelectLocation(location)
    cy.wait(5000)
    homePage.selectFromAndToDate()
    homePage.clickSearchButton()
    cy.wait(25000)
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