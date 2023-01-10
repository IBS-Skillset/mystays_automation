/* eslint-disable cypress/no-unnecessary-waiting */
import { should } from 'chai'
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

    roomTypeSection: ()=>cy.get('.roomtype'),
    selectedRoomRow:()=>cy.get('.border-b-2 border-gray-100 cursor-pointer selected'),
    reserveButton: ()=>cy.get('.reserve-button'),

    hotelName: ()=>cy.get('.hotelName')
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

  selectRefundableRoomAndReserve(){
    cy.wait(3000)
    //select room based on Refundable text
        // cy.get(':nth-child(1) > .p-3.flex-col > :nth-child(2) > .refund').contains('Refundable').click()

    //OR
        // cy.get(':nth-child(1) > .p-3.flex-col > :nth-child(2) > .refund').then(($refundableFlag)=>{
        //   if($refundableFlag.text().includes('Refundable')){
        //     cy.get(':nth-child(1) > .p-3.flex-col > :nth-child(2) > .refund').click()
        //   }
        //   else{
        //     cy.log('Room is not refundable')
        //   }
        // })

    //select refundable room by verifying rooms one by one
    cy.get('.refund.ml-2.mt-2').each(($refundableFlag,index, $list)=>{
        cy.log($refundableFlag.text())
        cy.log(index)
        if($refundableFlag.text()==="Refundable"){
          cy.wrap($refundableFlag).click()
          // verify the selected room is highlighted or not
                  // cy.get('.modal-table.bg-white')
                  // .find('tbody')
                  // .find('tr')
                  // // .should('have.class','<tr.border-b-2.border-gray-100.cursor-pointer.selected>')
                  // .and('have.attr','style')
          cy.wait(5000)
          cy.scrollTo('right')
          this.elements.reserveButton().should('be.visible').click()
          return false
        }
        else{
          cy.log('Room is not refundable')
          cy.log($refundableFlag.text())
        }
      })
  }
  getHotelDetails(){
    cy.get('.hotelName').then(($name)=>{
      const hotelName=$name.text()
      console.log(hotelName)
      cy.log(hotelName)
    })
  }
}
export default RoomDetailsPage
