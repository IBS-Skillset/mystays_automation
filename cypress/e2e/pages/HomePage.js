/* eslint-disable cypress/no-unnecessary-waiting */
require('cypress-plugin-tab')

class HomePage {
  //includes the elements and methods in myStays.com Home Page

  elements = {
    destinationField: () => cy.get('.location-input'),
    // homeLocationField: () =>cy.get('input[name=location]'),
    firstLocation: () => cy.get('.text-sm').eq(0), //any location
    // errorMessageForNoLocation: () => cy.get('.errorMsg'),

    checkinCalendar: () =>
      cy.get('.check-in > .date-image-container > .date-image'),
    checkoutCalendar: () =>
      cy.get('.check-out > .date-image-container > .date-image'),
    calendarPrevButton: () => cy.get('.rdrPprevButton'),
    calendarNextButton: () => cy.get('.react-datepicker__navigation--next'),
    calendarYear: () => cy.get('.rdrYearPicker > select'),
    calendarMonth: () => cy.get('.rdrMonthPicker > select'),
    calendarDay: () => cy.get('.rdrDayNumber'),

    checkInDateField: () => cy.get('.check-in > .date-input-container'),
    checkOutDateField: () => cy.get('.check-out > .date-input-container'),
    TravellerNumberField: () => cy.get('.travelers-input'),

    searchButton: () => cy.get('.btn-search'),

    hotelOnlyTab: () => cy.contains('HOTEL ONLY'),
    hotelFlightTab: () => cy.contains('HOTEL + FLIGHT'),
    hotelFlightCarTab: () => cy.contains('HOTEL + FLIGHT + CAR'),
    hotelCarTab: () => cy.contains('HOTEL + CAR'),

    usernameIcon: () => cy.get('.text-white'),

    locationDropDownList:()=>cy.get('.location-display-container')
  }

  getDestinationField() {
    return this.elements.destinationField()
  }
  //type and search for a particular location in Home page
  typeAndSelectLocation(location) {
    this.elements
      .destinationField()
      .should('be.visible')
      .and('be.enabled')
      .type(location)
    this.elements.locationDropDownList().should('be.visible')
    this.elements.firstLocation().click()
  }
  //select date from react date picker
  selectFromAndToDate() {
    this.elements.checkInDateField().click()
    this.elements.calendarNextButton().click().click().click().click().click()
    cy.get(':nth-child(1) > .react-datepicker__day--001').click()
    this.elements.checkOutDateField().click()
    this.elements.calendarNextButton()

    // cy.get(':nth-child(2) > .react-datepicker__day--002').click()
    // this.elements.TravellerNumberField().type('2') //select 2 travellers//this field is disabled now
  }
  searchforThreeNights() {
    this.elements.checkInDateField().click()
    this.elements.calendarNextButton().click().click()
    cy.get(':nth-child(1) > .react-datepicker__day--001').click()
    this.elements.checkOutDateField().click()
    this.elements.calendarNextButton()

    cy.get(':nth-child(1) > .react-datepicker__day--004').click()
  }
  clickSearchButton() {
    this.elements.searchButton().should('be.visible').and('be.enabled').click()
    cy.wait(15000)
  }
  //to verify whether the home page loaded is correct or not
  verifyHomePage() {
    // cy.url().should('contains','home')
    cy.url().should('include', 'http://127.0.0.1:3000/')
  }
  //verifying the tabs displayed in Home Page
  verifyTravelTypeHeaders() {
    this.elements.hotelOnlyTab().should('be.visible')
    this.elements.hotelFlightTab().should('be.visible')
    this.elements.hotelFlightCarTab().should('be.visible')
    this.elements.hotelCarTab().should('be.visible')
  }
  verifyDateFields() {
    this.elements.checkInDateField().should('be.visible')
    this.elements.checkOutDateField().should('be.visible')
  }
  verifyTravellerNumberBox() {
    this.elements.TravellerNumberField().should('be.visible')
  }
  verifyDestinationField() {
    this.elements.destinationField().should('be.visible').and('be.enabled')
  }
  verifyCalenderField() {
    this.elements.checkinCalendar().should('be.visible')
    this.elements.checkoutCalendar().should('be.visible')
  }
  verifySearchButton() {
    this.elements.searchButton().should('be.visible').and('be.enabled')
  }
  getValidationMessageforNoLocation(errorMessageForNoLocation) {
    cy.get('.errorMsg').then(function (e) {
      const t = e.text()
      expect(t).to.contains(errorMessageForNoLocation)
    })
  }
  selectMyTrips(){
    this.elements.usernameIcon().click()
    cy.contains('My Trips').click()
    cy.get('.active-trips > button').should('be.visible')//checking for 'Upcoming' tab
    }
}
export default HomePage
