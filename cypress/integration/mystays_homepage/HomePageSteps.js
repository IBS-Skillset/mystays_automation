import { Given,When, Them, And, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pages/SigninPage.js"
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
When('I enter username {string} and password {string}',(username,password)=>{
    signinPage.typeUsername(username)
    signinPage.typePassword(password)
})
And('I click on Sign In button',()=>{
    signinPage.clickSigninButton()
})
Then('I am on Home Page',()=>{
    homePage.veifyHomePage()
    cy.log("Successfully logged into application") //add home page launched validation
})
Then('I enter location as {string} and click on Search button',(location)=>{
    homePage.typeLocation(location)
    homePage.clickSearchButton()
})
