require('cypress-plugin-tab');
class HomePage {
    //includes the elements and methods in myStays.com Home Page

    elements = {
        languageSelectButton: () => cy.get('.inpt-language'),

        destinationField: () => cy.get('.flex > .w-full'),
        // firstLocation:()=>cy.get('#ChIJD7fiBh9u5kcRYJSMaMOCCwQ'), //select only Paris
        firstLocation: () => cy.get('div[class="location-items"]').eq(0), //any location
        searchButton: () => cy.get('.search-button'),
        errorMessageForNoLocation: () => cy.get('.errorMsg'),

        dateInputField: () => cy.get('.inputBox'),
        calendarIcon: () => cy.get('.calenderIcon > .svg-image'),
        earlyDateField: () => cy.get('.rdrDateDisplayItemActive > input'), //start date field in open calendar
        openCalendar: () => cy.get('.rdrMonth'),
        calendarPrevButton: () => cy.get('.rdrPprevButton'),
        calendarNextButton: () => cy.get('.rdrNextButton'),
        calendarYear: () => cy.get('.rdrYearPicker > select'),
        calendarMonth: () => cy.get('.rdrMonthPicker > select'),
        calendarDay: () => cy.get('.rdrDayNumber')
    }

    //type and search for a particular location in Home page
    typeAndSelectLocation(location) {
        this.elements.destinationField().should('be.visible').and('be.enabled')
        this.elements.destinationField().type(location)
        cy.wait(10000)
        this.elements.firstLocation().click()
    }

    //select date from react date picker
    selectFromAndToDate() {
        this.elements.dateInputField().should('be.visible').and('be.enabled')
        // this.elements.calendarIcon().should('be.visible').and('be.enabled')//is not enabled
        this.elements.dateInputField().click()
        this.elements.openCalendar().should('be.visible')

        // cy.get('.rdrDateDisplayItemActive > input')
        // .clear()
        // .type('Dec 01, 2022')
        // .tab()
        // .clear()
        // .type('Dec 03, 2022')

        this.elements.calendarMonth().select('December')
        this.elements.calendarYear().select('2022')
        cy.get('.rdrDayNumber').eq(4).click()
        cy.get('.rdrDayNumber').eq(5).click()
    }

    selectLanguage(language) {
        this.elements.languageSelectButton().should('be.visible').and('be.enabled')
    }

    clickSearchButton() {
        this.elements.searchButton().should('be.visible').and('be.enabled')
        this.elements.searchButton().click()
    }

    //to verify whether the home page loaded is correct or not
    verifyHomePage() {
        cy.url().should('contains','home')
        cy.url().should('include','http://127.0.0.1:3000/')
    }

    //verifying the elements displayed in Home Page
    verifyDestinationField() {
        this.elements.destinationField().should('be.visible').and('be.enabled')
    }
    verifyCalenderField() {
        this.elements.calendarIcon().should('be.visible')

    }
    verifySearchButton() {
        this.elements.searchButton().should('be.visible').and('be.enabled')

    }
    getValidationMessageforNoLocation(errorMessageForNoLocation) {
        cy.get('.errorMsg').then(function(e) {
            const t = e.text()
            expect(t).to.contains(errorMessageForNoLocation)
        })
    }
}

export default HomePage