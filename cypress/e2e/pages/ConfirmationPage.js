/* eslint-disable cypress/no-unnecessary-waiting */
import HomePage from './HomePage'
import RoomDetailsPage from './RoomDetailsPage'
const homePage = new HomePage()
const rommDetailsPage=new RoomDetailsPage()

class ConfirmationPage {
  //includes the elements and methods in HappyStays Confirmation Page
  elements = {
    hotelName: ()=>cy.get('.hotel-name-book'),
    hotelAddress: ()=>cy.get('.hotel-address-book'),
    hotelDetailsBook: ()=>cy.get('.hotel-details-book'),
    hotelImage: ()=>cy.get('.book-image'),
    bookingDetails: ()=>cy.get('.booking-details'),
    hotelImage:() =>cy.get('.book-image'),
    roomPrice:() =>cy.get('.room-price'),
    cancelHeading:() =>cy.get('.cancel-heading'),
    cancellationDate:() =>cy.get('.cancellation'),
    cancelRate:() =>cy.get('.rate-cancel'),

    userDetails:() =>cy.get('.user-details'),

    paymentDetails:() =>cy.get('.payment-details'),
    cardHolderNameField: () => cy.get('#cardHolderName'),
    cardNumberField: ()=>cy.get('#cardNumber'),
    expiryDateField: ()=>cy.get('#expiryDate'),
    cvvField: ()=>cy.get('#cvv'),

    bookNowButton: ()=>cy.get('.book-now-button'),
  }
  verifyDetails(){
    this.elements.bookingDetails().should('be.visible')

    this.elements.hotelImage().should('be.visible')
    this.elements.hotelDetailsBook().should('be.visible')
    this.elements.hotelName().should('be.visible')
    // this.elements.hotelName().then((confirmHotelName)=>{
    //   expect(confirmHotelName).to.eq(rommDetailsPage.getHotelDetails().hotelName)
    //   cy.log(confirmHotelName)
    // })
    this.elements.hotelAddress().should('be.visible')
  }
  
  fillPaymentInfo(){
    cy.wait(6000)
    this.elements.cardHolderNameField().type('SoniyaVarghese')
    this.elements.cardNumberField().type('4111111111111111')
    this.elements.expiryDateField().type('09/25')
    this.elements.cvvField().type('123')
  }

  clickBookNowButton(){
    this.elements.bookNowButton().click()
    cy.wait(3000)
  }
  verifyBookingMessage(){
    cy.get('.final-booking-info-content').should('have.text','Your trip has been successfully booked . Thank you for your reservation.')
    cy.wait(3000)
  }
  verifyMyTrips(){
    cy.get('btn-viewbooking').click()
    cy.wait(5000)
    cy.get('.hotelName pb-2').should('have.text','Bonne Nouvelle')
  }
}
export default ConfirmationPage
