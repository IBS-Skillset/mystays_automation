
require('cypress-plugin-tab');
class HomePage {
    //includes the elements and methods in myStays.com Home Page

    elements = {
        languageSelectButton: () => cy.get('.input-language'),

        destinationField: () => cy.get('.input').eq(0),
        // firstLocation:()=>cy.get('#ChIJD7fiBh9u5kcRYJSMaMOCCwQ'), //select only Paris
        searchButton: () => cy.get('.btn-search'),
        errorMessageForNoLocation: () => cy.get('.errorMsg'),

        dateInputField: () => cy.get('.inputBox'),
        calendarField: () => cy.get('.input-wrap > .input-field > .label > .input > .react-datepicker-wrapper > .react-datepicker__input-container > .picker'),
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
        this.elements.destinationField()
            .should('be.visible')
            .and('be.enabled')
        this.elements.destinationField()
            .type(location)
        cy.wait(10000)
        this.elements.firstLocation()
            .click()
    }

    //select date from react date picker
    selectFromAndToDate() {
        this.elements.dateInputField()
            .should('be.visible')
            .and('be.enabled')
        // this.elements.calendarIcon().should('be.visible').and('be.enabled')//is not enabled
        this.elements.dateInputField()
            .click()
        this.elements.openCalendar()
            .should('be.visible')

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
    selectDateDummy(){
        cy.get('.input-wrap > .input-field > .label').click()
        cy.get('.react-datepicker__day--025').click()
        cy.get('.input-wrap1 > .input-field > .label').click()
        cy.get('.react-datepicker__day--029').click()
        // cy.get('.input').eq(1).type('18/11/2022')
        
        // cy.get('.input').eq(2).type('28/11/2022')
        
        cy.get('.input').eq(3).type('2')

    }

    selectDate(){
        this.elements.dateInputField()
        .should('be.visible')
        .and('be.enabled') 
        this.elements.dateInputField()
            .click()
        this.elements.openCalendar()
            .should('be.visible')
            cy.get('.rdrNextButton > i').click().click()
            cy.get('.rdrDayStartOfMonth > .rdrDayNumber').click()
            cy.get(':nth-child(2) > input').click()
            cy.wait(1000)
            cy.get('.rdrDayNumber').eq(3).click()

        //cy.get('.rdrDayToday > .rdrDayNumber > span').click()

        



    }











    selectLanguage(language) {
        this.elements.languageSelectButton()
            .should('be.visible')
            .and('be.enabled')
    }

    clickSearchButton() {
        this.elements.searchButton()
            // .should('be.visible')
            // .and('be.enabled')
            .click()
        cy.wait(25000)
    }

    //to verify whether the home page loaded is correct or not
    verifyHomePage() {
        // cy.url().should('contains','home')
        cy.url().should('include','http://127.0.0.1:3000/')
    }

    //verifying the elements displayed in Home Page
    verifyDestinationField() {
        this.elements.destinationField()
            .should('be.visible')
            .and('be.enabled')
    }
    verifyCalenderField() {
        this.elements.calendarField()
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
}

export default HomePage