class HomePage{
//includes the elements and methods in myStays.com Home Page

    elements={
        languageSelectButton:()=>cy.get('.inpt-language'),

        destinationField:()=>cy.get('.flex > .w-full'),
        firstLocation:()=>cy.get('#ChIJD7fiBh9u5kcRYJSMaMOCCwQ'),
        searchButton:()=>cy.get('.search-button'),
        errorMessageForNoLocation:()=>cy.get('.errorMsg'),

        dateInputField:()=>cy.get('.inputBox'),
        calendarIcon:()=>cy.get('.calenderIcon > .svg-image'),
        openCalendar:()=>cy.get('.rdrMonth'),
        calendarPrevButton:()=>cy.get('.rdrPprevButton'),
        calendarNextButton:()=>cy.get('.rdrNextButton'),
        calendarYear:()=>cy.get('.rdrYearPicker > select'),
        calendarMonth:()=>cy.get('.rdrMonthPicker > select'),
        calendarDay:()=>cy.get('.rdrDayNumber')
    }

    //type and search for a particular location in Home page
    typeAndSelectLocation(location){
        this.elements.destinationField().should('be.visible').and('be.enabled')
        this.elements.destinationField().type(location)
        cy.wait(10000)
        this.elements.firstLocation().click()
        }

    //select date from react date picker
    selectFromAndToDate(){
        this.elements.dateInputField().should('be.visible').and('be.enabled')
        // this.elements.calendarIcon().should('be.visible').and('be.enabled')//is not enabled
        this.elements.dateInputField().click()
        this.elements.openCalendar().should('be.visible')
        this.elements.calendarMonth().select('December')
        this.elements.calendarYear().select('2022')
        cy.get('.rdrDayNumber').eq(4).click()
        cy.get('.rdrDayNumber').eq(5).click();
    }

    selectLanguage(language){
        this.elements.languageSelectButton().should('be.visible').and('be.enabled')
    }

    clickSearchButton(){
        this.elements.searchButton().should('be.visible').and('be.enabled')
        this.elements.searchButton().click();
    }

    //to verify whether the home page loaded is correct or not
    verifyHomePage(){
        cy.url().should('include', 'http://localhost:3000/')
    }

    //verifying the elements displayed in Home Page
    verifyDestinationField(){
        this.elements.destinationField().should('be.visible').and('be.enabled')
    }
    verifyCalenderField(){
        this.elements.calendarIcon().should('be.visible')

    }
    verifySearchButton(){
        this.elements.searchButton().should('be.visible').and('be.enabled')

    }
    getValidationMessageforNoLocation(errorMessageForNoLocation){
        cy.get('.errorMsg').then(function(e){
            const t = e.text()
            expect(t).to.contains(errorMessageForNoLocation)
         })
    }
}

export default HomePage