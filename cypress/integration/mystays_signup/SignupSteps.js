import { Given,When, Them, And, Then } from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import SignupPage from "../pages/SignupPage.js";

const signinPage=new SignInPage()
const common=new Common();
const signupPage=new SignupPage()

When ('I click on Create account button in Sign In page',()=>{
    signinPage.clickCreateOneButton()
})
And ('I enter valid {string} and {string} and {string} and {string} and {string}',(Emailaddress,Firstname,Lastname,Phonenumber,Password)=>{
    signupPage.typeEmailAddress(Emailaddress)
    signupPage.typeFirstName(Firstname)
    signupPage.typeLastName(Lastname)
    signupPage.typePhoneNumber(Phonenumber)

    signupPage.typePassword(Password)
})
And ('I click on Continue button',()=>{
    signupPage.clickContinueButton();
})
Then('I verify the account is created successfully',()=>{
    const successMessage="User successfully created. Enter the password to proceed"
    common.verifyBrandBanner()
    common.verifyFooterPresent()
    signupPage.verifySuccessAccountCreation(successMessage)
})
And('I am on Sign In page',()=>{
    cy.url().should('include', 'http://localhost:3000/signin')
})
And ('I click on Continue button and verify {string} is displayed',(message)=>{
    signupPage.clickContinueButtonAndVerifyValMessage(message)
})
And ('I click on Continue button and verify the message displayed',()=>{
    signupPage.clickContinueButtonAndVerifyMessage()
})



