import { Given,When, Them, And, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pages/SigninPage.js"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import SignupPage from "../pages/SignupPage.js";

const signinPage=new SignInPage()
const common=new Common();
const signupPage=new SignupPage()

Given('I can access to myStays.com',()=>{
    cy.visit("/")
})
When ('I click on Create account button in Sign In page',()=>{
    signinPage.clickCreateOneButton()

})
And ('I enter valid {string} and {string} and {string} and {string} and {string}',(Emailaddress,Firstname,Lastname,Password,Phonenumber)=>{
    signupPage.typeEmailAddress(Emailaddress)
    signupPage.typeFirstName(Firstname)
    signupPage.typeLastName(Lastname)
    signupPage.typePassword(Password)
    signupPage.typePhoneNumber(Phonenumber)

})
And ('I click on Continue button',()=>{
    signupPage.clickContinueButton();
})
Then('I verify the account is created with a message "User successfully created. Enter the password to proceed"',()=>{
    common.verifyBrandBanner()
    common.verifyFooterPresent()
})
And('I am on Sign In page',()=>{
    
})
And ('I click on Continue button and verify {string} is displayed',(message)=>{
    signupPage.clickContinueButtonAndVerifyValMessage(message)
})
And ('I click on Continue button and verify the message displayed',()=>{
    signupPage.clickContinueButtonAndVerifyMessage()
})



