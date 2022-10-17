class HomePage{
//includes the elements and methods in myStays.com Home Page

    elements={
        usernameIcon:()=>cy.get('.text-white'),
        languageSelectButton:()=>cy.get('.inpt-language'),

        destinationField:()=>cy.get('.flex > .w-full'),
        firstLocation:()=>cy.get('#ChIJD7fiBh9u5kcRYJSMaMOCCwQ'),
        dateInputField:()=>cy.get('.inputBox'),
        calendarIcon:()=>cy.get('.calenderIcon > .svg-image'),
        searchButton:()=>cy.get('.search-button'),
        errorMessage:()=>cy.get('.errorMsg')
    }
    //type and search for a particular location in Home page
    typeAndSelectLocation(location){
        this.elements.destinationField().should('be.visible').and('be.enabled')
        this.elements.destinationField().type(location)
        cy.wait(10000)
        this.elements.firstLocation().click()
        }
    //select date from react date picker
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

    //to get the username displayed on top right
    getUsername(){
        //method text to obtain text in username
        let txt = []
        cy.get('.text-white').then(function(e){
        txt.push(e)
        })
        cy.log(txt)        
    }

    getValidationMessageforNoLocation(errorMessage){
        cy.get('.errorMsg').then(function(e){
            const t = e.text()
            expect(t).to.contains(errorMessage)
         })
    }
}

export default HomePage