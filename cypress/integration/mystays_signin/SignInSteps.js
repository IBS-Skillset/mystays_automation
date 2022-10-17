import { Given,When, Them, And, Then } from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import HomePage from "../pages/HomePage.js";

const signinPage=new SignInPage()
const common=new Common();
const homePage=new HomePage();

When('I enter username {string} and password {string}',(username,password)=>{
    signinPage.typeUsername(username)
    signinPage.typePassword(password)
})
When('I enter password {string}',(password)=>{
    signinPage.typePassword(password)
})
And('I click on Sign In button',()=>{
    signinPage.clickSigninButton()
})
And('I click on Sign In button and verify {string} is displayed',(message)=>{
    signinPage.clickSigninButtonAndVerifyMessage(message)
})