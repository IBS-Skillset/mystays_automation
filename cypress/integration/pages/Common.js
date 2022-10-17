class Common{
 //includes the common elements and common methods in myStays.com application

    elements={
        languageSelectButton:()=>cy.get('.inpt-language'),
    }
    //to get the myStays.com banner displayed on page
    getBrandBanner(){
        return cy.get('.brand-banner')
    }
    // to get the footer ("Copyright © 2022. All rights reserved.myStays.com") displyed
    getPageFooter(){
        return cy.get('.footer-copyright')
    }

    verifyBrandBanner(){
        this.getBrandBanner().should('be.visible').and('have.text','myStays.com')
    }
    verifyFooterPresent(){
        this.getPageFooter().should('be.visible').and('have.text','Copyright © 2022. All rights reserved.myStays.com')
    }
    //to get the English/French language button displayed
    verifyLanguageSelectionField(){
        this.elements.languageSelectButton().should('be.visible').and('be.enabled')

    }
}
export default Common