import { Given, When, Them, And, Then, Before, After} from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import HomePage from "../pages/HomePage.js";
import SearchResultsPage from "../pages/SearchResultsPage.js";

const signinPage = new SignInPage()
const common = new Common();
const homePage = new HomePage();
const searchResults = new SearchResultsPage();

After(()=>{ // runs once all tests are done
    common.verifyBrandBanner()
    common.verifyFooterPresent()
})

Then('I verify the hotel search results displayed', () => {
    searchResults.displayHotelDetails()
})
Then('I verify the number of hotels displayed in {string}', (location) => {
    searchResults.getNumberOfHotels(location)
})
Then('I verify more than 10 hotel results are displayed',()=>{
    searchResults.clickOnShowMoreButton()
})
Then('I verify less than 10 hotel results are displayed',()=>{
    searchResults.displayHotelResultsLessThanTen()
})
Then('I click on See Avaialbility button',()=>{
    searchResults.clickOnSeeAvaialabilityButton()
})