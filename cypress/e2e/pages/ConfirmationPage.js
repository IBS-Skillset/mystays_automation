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
    hotelName:()=>cy.get('.final-booking-hotel-name > :nth-child(1)'),

    nameValidation:()=>cy.get(':nth-child(5) > .error-message'),
    cardNumberValidation:()=>cy.get(':nth-child(6) > .error-message'),
    expiryDateValidation:()=>cy.get(':nth-child(1) > .error-message'),
    cvcValidation:()=>cy.get(':nth-child(2) > .error-message')

  }
  verifyDetails(){
    this.elements.bookingDetails().should('be.visible')
    this.elements.hotelImage().should('be.visible')
    this.elements.hotelDetailsBook().should('be.visible')
    //this.elements.hotelName().should('be.visible')
    // this.elements.hotelName().then((confirmHotelName)=>{
    //   expect(confirmHotelName).to.eq(rommDetailsPage.getHotelDetails().hotelName)
    //   cy.log(confirmHotelName)
    // })
    this.elements.hotelAddress().should('be.visible')
  }

  verifyUserDetails(userFirstName, userLastName, emailAddress, mobilePhone) {
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
    this.elements.cardHolderNameField()
    .should('be.visible')
    .type(cardHolderName)
    this.elements.cardNumberField()
    .should('be.visible')
    .type(cardNumber)
    this.elements.expiryDateField()
    .should('be.visible')
    .type(expiryDate)
    this.elements.cvvField()
    .should('be.visible')
    .type(cvv)
  }

  clickBookNowButton(){
    this.elements.bookNowButton()
    .should('be.visible')
    .click()
    cy.wait(5000)
  }
  verifyBookingMessage(){
    // cy.get('.final-booking-info-content').should('have.text','Your trip has been successfully booked . Thank you for your reservation.')
    // cy.get('.final-booking-info-content').should('have.text','Your trip has been successfully booked . Thank you for your\n            reservation.')

    cy.get('.final-booking-hotel-name > .flex > .font-medium').should('have.text','Booked') //status
    this.elements.pnrNumber() 
        .invoke('text')
            .then((pnrNumber) => {
              cy.readFile('cypress/reports/PNR.txt').then((existingContent) => {
                const updatedContent = existingContent + '\n' + pnrNumber; // Append the PNR number to the existing content
              // Access the PNR number and perform further actions
              cy.log('Booked PNR number:', pnrNumber);
              // You can store the PNR number for cancellation or use it for further verification
              cy.writeFile('cypress/reports/PNR.txt', updatedContent);
              });
            });
  }

  verifyMyTrips(){
    this.elements.viewBookingButton()
    .should('be.visible')
    .click()
    cy.get('.trips-content').should('be.visible')

    // cy.readFile('cypress/reports/PNR.txt').then((content) => {
    // const pnrNumbers = content.split('\n'); // Split the content into an array of PNR numbers
    // // Compare the PNR numbers with the expected value or perform any other checks
    // expect(pnrNumbers).to.include('PNRNumber'); // Replace 'ABC123' with the value you want to compare
    // cy.log('Read PNR numbers:', pnrNumbers);
    // });

  }
  verifyMyTripsDetails(){
    //check hotel content is visible
    cy.get('.trips-content').should('be.visible')

    //check and log hotel name, booking id, created on date
    cy.get('.booking-info').should('be.visible').then(($bookingInfo)=>{
      cy.log("Count of trips: " + $bookingInfo.length)
      cy.log($bookingInfo.text())
      // expect($bookingInfo[0]).to.contain.text('388068461')
    })

    //check and print check-in, check-out date, room count and price
    cy.get('.booking-details-container').should('be.visible').then(($bookingDetails)=>{
      cy.log($bookingDetails.text())
    })
    
    //log hotel List
    cy.get('.hotelName.pb-2').then(($hotelNamesList)=>{
      cy.log($hotelNamesList.text())
    })

    cy.get('.text-gray-500').then(($bookingID)=>{
      // cy.log($bookingID.text())
      const bookingIDAndPNR=$bookingID.text()
      cy.log("PNRs:\n" +bookingIDAndPNR)
      // cy.log(bookingIDAndPNR.includes('38806833461')) true or false
      cy.readFile('cypress/fixtures/bookedPNR.json').then(function($booked){
        cy.log($booked.PNR)
        const PNR=$booked.PNR
        cy.get('.text-gray-500').then(($bookingID)=>{
          const bookingIDAndPNR=$bookingID.text()
          cy.log(bookingIDAndPNR)
          cy.log("PNR is "+PNR)
          expect(bookingIDAndPNR.includes( 388106124)).to.be.true//need to check $booked.PNR
        })
      })
    })
    cy.get('.footer-copyright').scrollIntoView()
  }
  
  verifyPaymentValidations(){
   this.elements.nameValidation().contains("Card holder name is required")
   this.elements.cardNumberValidation().contains("Card number is required")
   this.elements.expiryDateValidation().contains("Expiry date is required")
   this.elements.cvcValidation().contains("CVC is required")
  }
}
export default ConfirmationPage
