class HomePage{
    elements={
        usernameIcon:()=>cy.get('.text-white'),
        languageSelectButton:()=>cy.get('.inpt-language'),

        destinationField:()=>cy.get('.flex > .w-full'),
        firstLocation:()=>cy.get('#ChIJD7fiBh9u5kcRYJSMaMOCCwQ'),
        dateInputField:()=>cy.get('.inputBox'),
        calendarIcon:()=>cy.get('.calenderIcon > .svg-image'),
        searchButton:()=>cy.get('.search-button'),
    }
    typeAndSelectLocation(location){
        this.elements.destinationField().should('be.visible').and('be.enabled')
        this.elements.destinationField().type(location)
        cy.wait(10000)
        this.elements.firstLocation().click()
        }
    selectDate(){
        this.elements.dateInputField().should('be.visible').and('be.enabled')
        this.elements.calendarIcon().should('be.visible').and('be.enabled')
    }
    selectLanguage(language){
        this.elements.languageSelectButton().should('be.visible').and('be.enabled')

    }
    clickSearchButton(){
        this.elements.searchButton().should('be.visible').and('be.enabled')
        this.elements.searchButton().click();
    }
    verifyHomePage(){
        cy.url().should('include', 'http://localhost:3000/')
        cy.visit('http://localhost:3000')

    }
    verifyDestinationField(){
        this.elements.destinationField().should('be.visible').and('be.enabled')

    }
    verifyCalenderField(){
        this.elements.calendarIcon().should('be.visible')

    }
    verifySearchButton(){
        this.elements.searchButton().should('be.visible').and('be.enabled')

    }
    verifyLanguageSelectionField(){
        this.elements.languageSelectButton().should('be.visible').and('be.enabled')

    }

}

export default HomePage