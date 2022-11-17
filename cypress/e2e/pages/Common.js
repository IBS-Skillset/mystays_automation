class Common {
    //includes the common elements and common methods in myStays.com application

    elements = {
        languageSelectButton: () => cy.get('.input-language') ,
        usernameIcon: () => cy.get('p.text-white'),

        staysIcon: () => cy.get('.pl-2'),
        locationField: () => cy.get('input[placeholder*="Cherche"]'),
        searchButton: () => cy.get('.btn-search'),
    }
    getBrandBanner() { //to get the myStays.com banner displayed on page
        return cy.get('.brand-banner')
    }

    getPageFooter() { // to get the footer ("Copyright © 2022. All rights reserved.myStays.com") displyed
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

    verifyLanguageSelectionField() { //to get the English/French language button displayed
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
        this.elements.staysIcon().then(function(e) {
            const t = e.text()
            expect(t).to.contains("Rester")
        })

        //  this.elements.locationField().then(function(e){
        //     const t = e.text()
        //     expect(t).to.contains("Cherche")
        //  })

        this.elements.searchButton().then(function(e) {
            const t = e.text()
            expect(t).to.contains("Cherche")
        })
    }

    verifyEnglishHomePage() {
        this.elements.staysIcon().then(function(e) {
            const t = e.text()
            expect(t).to.contains("Stays")
        })

        //  this.elements.locationField().then(function(e){
        //     const t = e.text()
        //     expect(t).to.contains("Search")
        //  })

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