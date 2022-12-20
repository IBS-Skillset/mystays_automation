/* eslint-disable cypress/no-unnecessary-waiting */
import HomePage from './HomePage'
const homePage = new HomePage()

class RoomDetailsPage {
  //includes the elements and methods in myStays.com Room Details pop up
  elements = {
    overViewTab: () => cy.contains('Overview'),
    roomsTab: () => cy.contains('Rooms'),
    roomTypeHeader: () => cy.contains('Room Type'),
    todaysPriceHeader: () => cy.contains('Todays Price'),
    yourChoiceHeader: () => cy.contains('Your choice'),
    roomDetails: () => cy.get(':nth-child(1) > .roomtype'),
    roomPrice: () => cy.get('tbody > :nth-child(1) > .font-semibold > .flex'),
    breakfastIncludedFlag: () => cy.get('.text-green-600 ml-2'),
    breakfastExcludedFlag: () => cy.get('.text-red-500'),
    refundableFlag: () => cy.get('.refund ml-2 mt-2'),

    facilities: () => cy.get('.facilities'),
    facilitiesClass: () => cy.get('.room-type'),

    seeMoreButton: () => cy.get('.more-photos'),
    imagePopUpCloseButton: () => cy.get('.close-button'),
  }
  verifyRoomType() {
    this.elements.roomsTab().should('be.visible').click()
    this.elements.roomTypeHeader().should('be.visible')
    this.elements.todaysPriceHeader().should('be.visible')
    this.elements.yourChoiceHeader().should('be.visible')
    this.elements.roomDetails().should('be.visible')
    this.elements.roomPrice().should('be.visible')
    // this.elements.refundableFlag()
    //     .should('be.visible')
    //  this.elements.breakfastIncludedFlag()
    //      .should('be.visible')
    cy.wait(5000)
    homePage.elements.destinationField().type('Paris')
  }
  displayFacilities() {
    this.elements.facilities().should('be.visible')
    this.elements.facilitiesClass().should('have.length.lessThan', 13)
  }
  verifySeeMoreImages() {
    this.elements.seeMoreButton().should('be.visible').click()
    cy.wait(2000)
    cy.scrollTo('bottom')
    this.elements.imagePopUpCloseButton().should('be.visible').click()
  }
}
export default RoomDetailsPage
