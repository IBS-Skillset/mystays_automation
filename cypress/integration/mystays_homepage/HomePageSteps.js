import { Given,When, Them, And, Then } from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import HomePage from "../pages/HomePage.js";

const signinPage=new SignInPage()
const common=new Common();
const homePage=new HomePage();

// Then('I enter location as {string} and click on Search button',(location)=>{
//     homePage.typeAndSelectLocation(location)
//     cy.wait(5000)
//     homePage.clickSearchButton()
// })
