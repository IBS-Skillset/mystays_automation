import { Given,When, Them, And, Then } from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import HomePage from "../pages/HomePage.js";
import SearchResultsPage from "../pages/SearchResultsPage.js";

const signinPage = new SignInPage()
const common = new Common();
const homePage = new HomePage();
const searchResults = new SearchResultsPage();

Then('I verify the hotel search results displayed', () => {
    searchResults.displayHotelDetails()
})
Then('I verify the number of hotels displayed in {string}', (location) => {
    searchResults.getNumberOfHotels(location)
})