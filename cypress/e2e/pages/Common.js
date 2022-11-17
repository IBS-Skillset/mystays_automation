class Common {
    //includes the common elements and common methods in myStays.com application

    elements = {
        languageSelectButton: () => cy.get('.input-language') ,
        usernameIcon: () => cy.get('.text-white'),
        usernameDropDown: () => cy.get('.dropdown-menu'),
        userImage:() => cy.get('.pr-1'),

        locationField: () => cy.get('input[placeholder*="Cherche"]'),//check
        searchButton: () => cy.get('.btn-search'),
    }
    //to get the 'myStays.com' banner displayed on page
    getBrandBanner() { 
        return cy.get('.brand-banner')
    }

    // to get the footer ("Copyright © 2022. All rights reserved.myStays.com") displyed
    getPageFooter() { 
        return cy.get('.footer-copyright')
    }

    verifyBrandBanner() {
        this.getBrandBanner()
            .should('be.visible')
            .and('have.text', 'myStays.com')
    }

    verifyFooterPresent() {
        this.getPageFooter()
            .should('be.visible')
            .and('have.text', 'Copyright © 2022. All rights reserved.myStays.com')
    }

    //to get the English/French language button displayed
    verifyLanguageSelectionField() { 
        this.elements.languageSelectButton()
            .should('be.visible')
            .and('be.enabled')
    }
    selectFrenchLanguage() {
        this.elements.languageSelectButton()
            .select('Français')
    }
    selectEnglishLanguage() {
        this.elements.languageSelectButton()
            .select('English')
    }

    verifyFrenchHomePage() {
         this.elements.locationField().then(function(e){
            const t = e.text()
            expect(t).to.contains("Cherche")
         })

        this.elements.searchButton().then(function(e) {
            const t = e.text()
            expect(t).to.contains("Cherche")
        })
    }

    verifyEnglishHomePage() {
         this.elements.locationField().then(function(e){
            const t = e.text()
            expect(t).to.contains("Search")
         })

        this.elements.searchButton().then(function(e) {
            const t = e.text()
            expect(t).to.contains("Search")
        })
    }

    //to get the username displayed on top right
    getUsername() {
        //method to obtain text in username
        let txt = []
        cy.get('.text-white').then(function(e) {
            txt.push(e)
        })
        cy.log(txt)
    }

    //to verify the first name displayed in Home page
    verifyUsername(){
        cy.fixture('testDataFile').then((user) => {
            this.user = user
        this.elements.usernameIcon()
            .should('be.visible')
            .should('have.text',user.UserFirstName)
        })

    }
}
export default Common