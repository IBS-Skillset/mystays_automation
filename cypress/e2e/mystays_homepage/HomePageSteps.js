import { Given, When, Them, And, Then, Before, After} from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import HomePage from "../pages/HomePage.js";

const signinPage = new SignInPage()
const common = new Common();
const homePage = new HomePage();

After(()=>{ // runs once all tests are done
    common.verifyBrandBanner()
    common.verifyFooterPresent()
})

And('I verify the travel type headers displayed',()=>{
    homePage.verifyTravelTypeHeaders()
})
And('I verify the destination field in Home page', () => {
    homePage.verifyDestinationField()
})
And('I verify the Calendar displayed in Home page', () => {
    homePage.verifyCalenderField()
})
And('I verify the date fields displayed',()=>{
    homePage.verifyDateFields()
})
And('I verify the travellers input box',()=>{
    homePage.verifyTravellerNumberBox()
})
And('I verify the Search button displayed', () => {
    homePage.verifySearchButton()
})
And('I verify the validation when clicked on Search button without entering Location', () => {
    homePage.clickSearchButton()
    const errorMessage = "*Location is required"
    homePage.getValidationMessageforNoLocation(errorMessage)
})
And('I verify the language selection displayed on top', () => {
    common.verifyLanguageSelectionField()
})
// Then('I enter location as {string} and click on Search button',(location)=>{
//     homePage.typeAndSelectLocation(location)
//     cy.wait(5000)
//     homePage.clickSearchButton()
// })

And('I select Français language', () => {
    common.selectFrenchLanguage()
})

And('I select English language', () => {
    common.selectEnglishLanguage()
})

Then('I verify the home page is displayed in Français', () => {
    common.verifyFrenchHomePage()
})
Then('I verify the home page is displayed in English', () => {
    common.verifyEnglishHomePage()
})