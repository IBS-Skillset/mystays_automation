/* eslint-disable cypress/no-unnecessary-waiting */
import HomePage from './HomePage'
import RoomDetailsPage from './RoomDetailsPage'
const homePage = new HomePage()
const roomDetails = new RoomDetailsPage()

class SearchResultsPage {
  //includes the elements and methods in myStays.com Search Results Page
  elements = {
    // numberOfProperties: () => cy.get('.text-2xl'),

    hotelNameList: () => cy.get('.hotel-name'),
    hotelAddressList: () => cy.get('.address'),
    hotelImageList: () => cy.get('.hotel-image'),
    hotelRatingButton: () => cy.get('.grid pl-1 w-28 grid-cols-5'),

    seeAvaialabilityButtonOne: () => cy.contains('See availability').eq(0),

    showMoreButton: () => cy.get('.btn-loadmore'),
    resultsSearchButton: () => cy.get('.button'),

    firstHotel: () => cy.get('.search-result > :nth-child(1) > :nth-child(1)'),
    firstHotelImageSwiper: () =>
      cy.get(':nth-child(1)>.swiper-container>.next').eq(0),
    firstHotelImage: () =>
      cy.get(
        ':nth-child(1) > picture > .hotel-image > .swiper-container > .swiper-list > :nth-child(1) > .swiper-img',
      ),
    nightCount: () => cy.get(':nth-child(1) > :nth-child(3) > .text-sm'),
    hotelAddress: () => cy.get('.address-field'),
  }

  verifyLocationField() {
    homePage.elements.destinationField().should('be.visible').and('be.enabled')
  }
  displayHotelDetails() {
    homePage.elements.destinationField().should('be.visible')
    homePage.elements.checkInDateField().should('be.visible')
    homePage.elements.checkOutDateField().should('be.visible')
    homePage.elements.TravellerNumberField().should('be.visible')
    this.elements.firstHotel().should('be.visible')
    this.elements.hotelNameList().should('be.visible')
    this.elements.hotelAddressList().should('be.visible')
    this.elements.seeAvaialabilityButtonOne().should('be.visible')
    this.elements.hotelImageList().should('be.visible')
    // this.elements.hotelRatingButton()
    // .should('be.visible')
    cy.log('Hotel search results are displayed')
  }
  displayHotelResultsLessThanTen() {
    // to get "Kochi: 6 properties found"
    // cy.get('div[class="text-2xl md:text-3xl font-medium"]').then(($input) => {
    //     const txt=$input.text()
    //     cy.log(txt)
    //     const resultsNumberArray = txt.split(" ")
    //     expect(resultsNumberArray[1]).to.eq('6')
    // expect(parseInt(resultsNumberArray[1])).to.be.lessThan(10) //checking results are less than 10
    // })

    cy.get('.btn-availability').its('length').should('be.lt', 10) //assert expected 3 (see availability buttons) to be below 10
    this.elements
      .showMoreButton() //assert expected .btn-loadmore not to exist in the DOM
      .should('not.exist')
  }
  getNumberOfHotels(location) {
    //add step to fetch no.of hotels from DB
    //method to get number of hotels ("Paris: 5 properties found")
    cy.get('div[class="text-2xl md:text-3xl font-medium"]').then(($number) => {
      const txt = $number.text()
      cy.log(txt)
      const resultsNumberArray = txt.split(':') //extracting only 'Paris'' from 'Paris: 5 properties found'

      //verifying the location in search results is same as that of location in the input data
      expect(resultsNumberArray[0]).to.contains(location)
    })
  }
  searchInResultsPage() {
    homePage.elements
      .destinationField()
      .should('be.visible')
      .clear()
      .type('Paris, France')
    cy.get('#ChIJD7fiBh9u5kcRYJSMaMOCCwQ').click()
    homePage.elements.checkInDateField().should('be.visible')
    homePage.elements.checkOutDateField().should('be.visible')
    homePage.elements.TravellerNumberField().should('be.visible')
    this.elements.resultsSearchButton().should('be.visible')
  }
  clickOnSeeAvaialabilityButton() {
    const hotelIndex=5 //Bonne Nouvelle hotel
    //get hotelCode
    cy.get('a:contains("See availability")').eq(hotelIndex).then(($link) => {
      const href = $link.attr('href')
      cy.log(href)
      const hrefArray = href.split('/')
      const hotelCode = hrefArray[2]
      cy.log(hotelCode)
    // cy.get().eq(hotelIndex).then(($hotelName)=>{
    //   cy.log($hotelName.text())
    // })

      //to get redux state
      cy.window()
        .its('store')
        .invoke('getState')
        .then((state) => {
          var hotelDescription =
            state.hotel.descriptionResponse.hotelDescriptionResponsesPerCode[
              hotelCode
            ]
          var hotelAvailability =
            state.hotel.availabilityRequest.hotelAvailabilityRequest
          var nightCount = state.hotel.nightCount.days
          cy.log(hotelDescription, hotelAvailability, nightCount)
          var userDetails=state.userDetails.userDetails

          //click See Availability button
          cy.get('a:contains("See availability")')
            .eq(hotelIndex)
            .invoke('removeAttr', 'target')
            .invoke('removeAttr', 'rel')
            .click()

          //to dispatch hotel description, hotel availability, night count, user details
          cy.window().its('store').invoke('dispatch', {
            type: 'ADD_HOTEL_DESCRIPTION_RESPONSE',
            hotelCode: hotelCode,
            payload: hotelDescription,
          })
          cy.window().its('store').invoke('dispatch', {
            type: 'HOTEL_AVAILABILITY_REQUEST',
            payload: hotelAvailability,
          })
          cy.window().its('store').invoke('dispatch', {
            type: 'DAYS',
            payload: nightCount,
          })
          cy.window().its('store').invoke('dispatch', {
            type: 'USER_DETAILS',
            payload: userDetails,
          })
        })
    })
  }
  clickOnShowMoreButton() {
    this.elements
      .showMoreButton()
      .should('be.visible')
      .and('be.enabled')
      .click()
  }
  displayNoOfNights() {
    this.elements.nightCount().should('have.text', '3 night')
  }
  navigateFirstHotelImages() {
    this.elements.hotelImageList().should('be.visible')
    this.elements
      .firstHotelImageSwiper()
      .should('be.visible')
      .click()
      .click()
      .click()
      .click()
      .click()
    this.elements.hotelImageList().should('be.visible')
  }
  overviewTabDefaultActive() {
    roomDetails.elements.overViewTab().should('be.visible').should('be.enabled')
  }
  addressDisplay() {
    this.elements.hotelAddress().should('be.visible')
  }
}
export default SearchResultsPage
