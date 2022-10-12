import { Given,When, Them, And, Then } from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import HomePage from "../pages/HomePage.js";

const signinPage=new SignInPage()
const common=new Common();
const homePage=new HomePage();

Given('I can access to myStays.com',()=>{
    cy.visit("/")
    common.verifyBrandBanner()
    common.verifyFooterPresent()
})
When('I login into myStays.com application using {string} and {string}',(username,password)=>{
    signinPage.typeUsername(username)
    signinPage.typePassword(password)
    signinPage.clickSigninButton()
    homePage.verifyHomePage()
    cy.log("Successfully logged into application")
})
Then('I am on Home Page',()=>{
    cy.visit("http://localhost:3000/")
    homePage.verifyHomePage()
    cy.log("Successfully logged into application") //add home page launched validation

})
Then('I enter location as {string} and click on Search button',(location)=>{
    homePage.typeAndSelectLocation(location)
    cy.wait(5000)
    homePage.clickSearchButton()
    cy.wait(25000)

})