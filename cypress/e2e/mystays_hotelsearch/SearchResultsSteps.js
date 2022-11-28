import { Given, When, Them, And, Then, Before, After} from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import HomePage from "../pages/HomePage.js";
import SearchResultsPage from "../pages/SearchResultsPage.js";
import RoomDetailsPage from "../pages/RoomDetailsPage.js";

const signinPage = new SignInPage()
const common = new Common();
const homePage = new HomePage();
const searchResults = new SearchResultsPage();
const rommDetails = new RoomDetailsPage();

After(()=>{ // runs once all tests are done
    common.verifyBrandBanner()
    common.verifyFooterPresent()
})


Then('I verify the number of hotels displayed in {string}', (location) => {
    searchResults.getNumberOfHotels(location)
})
Then('I verify the hotel search option in search results page',()=>{
    searchResults.searchInResultsPage()
    // searchResults.displayHotelDetails()
})
Then('I verify more than 10 hotel results are displayed',()=>{
    searchResults.clickOnShowMoreButton()
})
Then('I verify less than 10 hotel results are displayed',()=>{
    searchResults.displayHotelResultsLessThanTen()
})


And('I search for 3 nights', () => {
    homePage.searchforThreeNights()
})
Then('I see the text 3 night on search results page',()=>{
    searchResults.displayNoOfNights()
})
And('I verify the option to see the maximum of 6 hotel images',()=>{
    searchResults.navigateFirstHotelImages()
})