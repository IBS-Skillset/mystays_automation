/* eslint-disable cypress/no-unnecessary-waiting */
import HomePage from './HomePage'
const homePage = new HomePage()

class ConfirmationPage {
  //includes the elements and methods in HappyStays Confirmation Page
  elements = {
    hotelName: ()=>cy.get('.hotel-name-book'),
    hotelAddress: ()=>cy.get('.hotel-address-book'),
    hotelImage: ()=>cy.get('.book-image'),

    cardHolderNameField: () => cy.get('#cardHolderName'),
    cardNumberField: ()=>cy.get('#cardNumber'),
    expiryDateField: ()=>cy.get('#expiryDate'),
    cvvField: ()=>cy.get('#cvv'),

    bookNowButton: ()=>cy.get('.book-now-button'),
  }
  verifyDetails(){
    this.elements.hotelName().should('be.visible')
    this.elements.hotelAddress().should('be.visible')
  }
  
}
export default ConfirmationPage
