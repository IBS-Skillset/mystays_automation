
require('cypress-plugin-tab');
class HomePage {
    //includes the elements and methods in myStays.com Home Page

    elements = {
        languageSelectButton: () => cy.get('.input-language'),

        destinationField: () => cy.get('.location-input'),
        homeLocationField: () =>cy.get('input[name=location]'),
        firstLocation: () => cy.get('.text-sm').eq(0), //any location
        errorMessageForNoLocation: () => cy.get('.errorMsg'),

        usernameIcon: () => cy.get('.text-white'),
        usernameDropdown:()=>cy.get('.dropdown-user'),
        dropdownList:()=>cy.get('.dropdown-link'),
        logoutButton:()=>cy.get('.dropdown-logout'),

        checkinCalendar:()=>cy.get('.check-in > .date-image-container > .date-image'),
        checkoutCalendar:()=>cy.get('.check-out > .date-image-container > .date-image'),
        calendarPrevButton: () => cy.get('.rdrPprevButton'),
        calendarNextButton: () => cy.get('.react-datepicker__navigation--next'),
        calendarYear: () => cy.get('.rdrYearPicker > select'),
        calendarMonth: () => cy.get('.rdrMonthPicker > select'),
        calendarDay: () => cy.get('.rdrDayNumber'),
        homeCheckInDate:()=>cy.get('.check-in > .date-input-container'),
        homeCheckOutDate:()=>cy.get('.check-out > .date-input-container'),
        homeTravellerNoField:() => cy.get('.travelers-input'),
        searchButton:()=>cy.get('.btn-search'),

        hotelOnlyTab:()=>cy.contains('HOTEL ONLY'),
        hotelFlightTab:()=>cy.contains('HOTEL + FLIGHT'),
        hotelFlightCarTab:()=>cy.contains('HOTEL + FLIGHT + CAR'),
        hotelCarTab:()=>cy.contains('HOTEL + CAR'),
    }

    //type and search for a particular location in Home page
    typeAndSelectLocation(location) {
        this.elements.homeLocationField()
            .should('be.visible')
            .and('be.enabled')
            .type(location)
        cy.wait(10000)
        this.elements.firstLocation()
            .click()
    }

    //select date from react date picker
    selectFromAndToDate(){
        this.elements.homeCheckInDate()
            .click()
        this.elements.calendarNextButton()
            .click()
            .click()
            .click()
        cy.get(':nth-child(1) > .react-datepicker__day--001').click()
        this.elements.homeCheckOutDate()
            .click()
        this.elements.calendarNextButton().click().click().click()
        cy.get(':nth-child(1) > .react-datepicker__day--003').click()
        this.elements.homeTravellerNoField().type('2')//select 2 travellers
    }

    searchforThreeNights(){
        this.elements.homeCheckInDate()
            .click()
        this.elements.calendarNextButton().click().click()
        cy.get(':nth-child(1) > .react-datepicker__day--001').click()
        this.elements.homeCheckOutDate().click()
        this.elements.calendarNextButton().click().click()
        cy.get(':nth-child(1) > .react-datepicker__day--004').click()
    }
    selectLanguage(language) {
        this.elements.languageSelectButton()
            .should('be.visible')
            .and('be.enabled')
    }

    clickSearchButton() {
        this.elements.searchButton()
            .should('be.visible')
            .and('be.enabled')
            .click()
        cy.wait(25000)
    }

    //to verify whether the home page loaded is correct or not
    verifyHomePage() {
        // cy.url().should('contains','home')
        cy.url().should('include','http://127.0.0.1:3000/')
    }

    //verifying the elements displayed in Home Page
    verifyTravelTypeHeaders(){
        this.elements.hotelOnlyTab()
            .should('be.visible')
        this.elements.hotelFlightTab()
            .should('be.visible')
        this.elements.hotelFlightCarTab()
            .should('be.visible')
        this.elements.hotelCarTab()
            .should('be.visible')
    }

    verifyDateFields(){
        this.elements.homeCheckInDate()
            .should('be.visible')
        this.elements.homeCheckOutDate()
            .should('be.visible')
    }

    verifyTravellerNumberBox(){
        this.elements.homeTravellerNoField()
            .should('be.visible')
            .and('be.enabled')
    }
    verifyDestinationField() {
        this.elements.destinationField()
            .should('be.visible')
            .and('be.enabled')
    }
    verifyCalenderField() {
        this.elements.checkinCalendar()
            .should('be.visible')
        this.elements.checkoutCalendar()
            .should('be.visible')
    }
    verifySearchButton() {
        this.elements.searchButton()
            .should('be.visible')
            .and('be.enabled')

    }
    getValidationMessageforNoLocation(errorMessageForNoLocation) {
        cy.get('.errorMsg').then(function(e) {
            const t = e.text()
            expect(t).to.contains(errorMessageForNoLocation)
        })
    }
    clickuserNameDropdown(){
        this.elements.usernameIcon()
            .click()
        this.elements.usernameIcon().then(function(e){
            const name=e.text()
            cy.log(name)
        })
        this.elements.dropdownList()
            .invoke("text")
            .should("eq", "My ProfileMy TripsStays")
    }
    clickLogoutButton(){
        this.elements.logoutButton()
            .click()
        var LOGOUT_MESSAGE= 'User logout. Please Sign in again!'
        cy.get('.errorMsg').then(function(e) {
            const t = e.text()
            expect(t).to.contains(LOGOUT_MESSAGE)
        })
        cy.url().should('include','http://127.0.0.1:3000/signin')
    }
}

export default HomePage