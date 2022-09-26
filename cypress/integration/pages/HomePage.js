class HomePage{
    elements={
        usernameIcon:()=>cy.get('.text-white'),
        destinationField:()=>cy.get('.flex > .w-full'),
        dateInputField:()=>cy.get('.inputBox'),
        calendarIcon:()=>cy.get('.calenderIcon > .svg-image'),
        searchButton:()=>cy.get('.search-button'),
        languageSelectButton:()=>cy.get('.inpt-language')
    }
    typeLocation(location){
        this.elements.destinationField().should('be.visible').and('be.enabled')
        this.elements.destinationField().type(location)
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
    veifyHomePage(){
        cy.url().should('include', 'http://localhost:3000/')

    }
}

export default HomePage