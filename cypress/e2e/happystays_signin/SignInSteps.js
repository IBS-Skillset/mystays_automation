import {
  Given,
  When,
  Them,
  And,
  Then,
  Before,
  After,
} from 'cypress-cucumber-preprocessor/steps'
import Common from '../pages/Common.js'
import SignInPage from '../pages/SigninPage.js'
import HomePage from '../pages/HomePage.js'

const signinPage = new SignInPage()

When(
  'I enter username {string} and password {string}',
  (username, password) => {
    signinPage.typeUsername(username)
    signinPage.typePassword(password)
  },
)
When('I enter password {string}', (password) => {
  signinPage.typePassword(password)
})
And('I click on Sign In button and verify {string} is displayed for {string}', (message, pwd) => {
  signinPage.clickSigninButtonAndVerifyMessage(message,pwd)
})
And('I click on Sign In button and verify {string} or {string} is displayed', (message1, message2) => {
  signinPage.clickSigninButtonAndVerifyMessages(message1, message2)
})
