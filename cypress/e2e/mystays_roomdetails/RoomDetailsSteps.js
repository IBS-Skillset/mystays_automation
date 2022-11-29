import { Given, When, Them, And, Then, Before, beforeEach, After} from "cypress-cucumber-preprocessor/steps"
import Common from "../pages/Common.js";
import SignInPage from "../pages/SigninPage.js";
import HomePage from "../pages/HomePage.js";
import SearchResultsPage from "../pages/SearchResultsPage.js";
import RoomDetailsPage from "../pages/RoomDetailsPage.js";

const signinPage = new SignInPage()
const common = new Common();
const homePage = new HomePage();
const searchResults = new SearchResultsPage();
const roomDetails = new RoomDetailsPage();

Then('I verify Overview tab is active by default',()=>{
    searchResults.overviewTabDefaultActive()
})
