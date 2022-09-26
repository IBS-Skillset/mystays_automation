class Common{
 
    getBrandBanner(){
        return cy.get('.brand-banner')
    }
    getPageFooter(){
        return cy.get('.footer-copyright')
    }

    verifyBrandBanner(){
        this.getBrandBanner().should('be.visible').and('have.text','myStays.com')
    }
    verifyFooterPresent(){
        this.getPageFooter().should('be.visible').and('have.text','Copyright © 2022. All rights reserved.myStays.com')
    }
}
export default Common