import { Given,When, Them, And, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pages/SigninPage.js"
import Common from "/Users/A-10765/IdeaProjects/mystays_automation_cypress9/cypress/integration/pages/Common.js";
import SignInPage from "../pages/SigninPage.js";

const signinPage=new SignInPage()
const common=new Common();

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
    cy.log("Successfully logged into application") //add home page launched validation
})
And('I click on Sign In button and verify {string} is displayed',(message)=>{
    signinPage.clickSigninButtonAndVerifyMessage(message)
})