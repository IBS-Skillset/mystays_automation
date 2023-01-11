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
    userDetailsFields:() =>cy.get('.values.headings'),

    paymentDetails:() =>cy.get('.payment-details'),
    cardHolderNameField: () => cy.get('#cardHolderName'),
    cardNumberField: ()=>cy.get('#cardNumber'),
    expiryDateField: ()=>cy.get('#expiryDate'),
    cvvField: ()=>cy.get('#cvv'),

    bookNowButton: ()=>cy.get('.book-now-button'),

    viewBookingButton: ()=>cy.get('.btn-viewbooking'),
    successMessage:()=>cy.get('.final-booking-info-content'),
    pnrNumber:()=>cy.get('.confirmation-number'),
    hotelName:()=>cy.get('.final-booking-hotel-name > :nth-child(1)')
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
    cy.wait(5000)
  }

  verifyUserDetails(userFirstName, userLastName, emailAddress, mobilePhone) {
    cy.wait(2000)
    this.elements
    .userDetailsFields().eq(0)
    .should('be.visible')
    .should('have.text', userFirstName)

    this.elements
    .userDetailsFields().eq(1)
    .should('be.visible')
    .should('have.text', userLastName)

    this.elements
    .userDetailsFields().eq(2)
    .should('be.visible')
    .should('have.text', emailAddress)

    this.elements
    .userDetailsFields().eq(3)
    .should('be.visible')
    .should('have.text', mobilePhone)
  }
  
  fillPaymentInfo(cardHolderName,cardNumber,expiryDate,cvv){
    cy.wait(6000)
    this.elements.cardHolderNameField().type(cardHolderName)
    this.elements.cardNumberField().type(cardNumber)
    this.elements.expiryDateField().type(expiryDate)
    this.elements.cvvField().type(cvv)
  }

  clickBookNowButton(){
    this.elements.bookNowButton().click()
    cy.wait(3000)
  }
  verifyBookingMessage(){
    cy.wait(5000)
    // cy.get('.final-booking-info-content').should('have.text','Your trip has been successfully booked . Thank you for your reservation.')
    // cy.get('.final-booking-info-content').should('have.text','Your trip has been successfully booked . Thank you for your\n            reservation.')

    cy.get('.final-booking-hotel-name > .flex > .font-medium').should('have.text','Booked') //status
    //cy.get('.final-booking-hotel-name > :nth-child(1)') //hotel name
    //cy.get('.confirmation-number')//pnr
    //checkin date cy.get('.font-bold > .ml-20')
    //check out date cy.get('.check-out-date')
    //room nos night nos cy.get('.font-bold > .ml-2')

    this.elements.successMessage().then(($message)=>{
      cy.writeFile('cypress/fixtures/bookedPNR.json',{SuccessMessage:$message.text()},{ flag: 'a+' })
    })
    this.elements.pnrNumber().then(($pnr)=>{
      cy.writeFile('cypress/fixtures/bookedPNR.json',{PNR:$pnr.text(), Date: Date()},{ flag: 'a+' })
    })
    this.elements.hotelName().then(($hotelName)=>{
      cy.writeFile('cypress/fixtures/bookedPNR.json',{hotelName:$hotelName.text()},{ flag: 'a+' })
    })
  }
  verifyMyTrips(){
    cy.wait(3000)
    this.elements.viewBookingButton().click()
    cy.wait(5000)
    cy.readFile('cypress/fixtures/bookedPNR.json').then(function($booked){
      cy.log($booked.PNR)
      cy.contains($booked.hotelName)
      cy.contains($booked.PNR)
    })
  }

}
export default ConfirmationPage
