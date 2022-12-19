class Common {
  //includes the common elements and common methods in myStays.com application

  elements = {
    languageSelectButton: () => cy.get('.input-language'),

    usernameIcon: () => cy.get('.text-white'),
    usernameDropDown: () => cy.get('.dropdown-user'),
    userImage: () => cy.get('.pr-1'),
    dropdownList: () => cy.get('.dropdown-link'),
    logoutButton: () => cy.get('.dropdown-logout'),
  }

  getBrandBanner() {
    return cy.get('.brand-banner')
  }
  // to get the footer ("Copyright © 2022. All rights reserved.myStays.com") displyed
  getPageFooter() {
    return cy.get('.footer-copyright')
  }
  verifyBrandBanner() {
    this.getBrandBanner().should('be.visible').and('have.text', 'HappyStays')
  }
  verifyFooterPresent() {
    this.getPageFooter()
      .should('be.visible')
      .and('have.text', 'Copyright © 2022. All rights reserved.myStays.com')
  }
  //to get the English/French language button displayed
  verifyLanguageSelectionField() {
    this.elements.languageSelectButton().should('be.visible').and('be.enabled')
  }
  selectFrenchLanguage() {
    this.elements.languageSelectButton().select('Français')
  }
  selectEnglishLanguage() {
    this.elements.languageSelectButton().select('English')
  }
  verifyFrenchHomePage() {
    homePage.elements.getDestinationField().then(function (e) {
      const t = e.text()
      expect(t).to.contains('Cherche')
    })
    homePage.elements.searchButton().then(function (e) {
      const t = e.text()
      expect(t).to.contains('Cherche')
    })
  }
  verifyEnglishHomePage() {
    homePage.elements.destinationField().then(function (e) {
      const t = e.text()
      expect(t).to.contains('Search')
    })
    homePage.elements.searchButton().then(function (e) {
      const t = e.text()
      expect(t).to.contains('Search')
    })
  }
  clickUsername() {
    this.elements.usernameIcon().click()
  }
  //to get the username displayed on top right
  getUsername() {
    //method to obtain text in username
    let txt = []
    this.elements.usernameIcon().then(function (e) {
      txt.push(e)
    })
    cy.log(txt)
  }
  //to verify the first name displayed in Home page
  verifyUsername(UserFirstName) {
    this.elements
      .usernameIcon()
      .should('be.visible')
      .should('have.text', UserFirstName)
  }
  clickuserNameDropdown() {
    this.elements.usernameIcon().click()
    this.elements.usernameIcon().then(function (e) {
      const name = e.text()
      cy.log(name)
    })
    this.elements
      .dropdownList()
      .invoke('text')
      .should('eq', 'My ProfileMy TripsStays')
  }
  clickLogoutButton() {
    this.elements.logoutButton().click()
    var LOGOUT_MESSAGE = 'User logout. Please Sign in again!'
    cy.get('.errorMsg').then(function (e) {
      const t = e.text()
      expect(t).to.contains(LOGOUT_MESSAGE)
    })
    cy.url().should('include', 'http://127.0.0.1:3000/signin')
  }
}
export default Common
