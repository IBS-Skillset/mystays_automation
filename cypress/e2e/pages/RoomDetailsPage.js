import HomePage from "./HomePage"
const homePage=new HomePage();

class RoomDetailsPage{

    //includes the elements and methods in myStays.com Room Details pop up    
    elements = {
        roomTypeHeader: () =>cy.get('.w-40'),
        todaysPriceHeader: () =>cy.get('.w-28'),
        yourChoiceHeader: () =>cy.get('.w-32'),
        roomDetails: () =>cy.get(':nth-child(1) > .roomtype'),
        roomPrice: () =>cy.get('tbody > :nth-child(1) > .font-semibold > .flex'),
        breakfastIncludedFlag: () =>cy.get(':nth-child(1) > .p-3.flex-col > :nth-child(1) > h1.text-green-600'),
        breakfastExcludedFlag: () =>cy.get('.text-red-500'),
        refundableFlag: () =>cy.get(':nth-child(1) > .p-3.flex-col > :nth-child(2) > span > .listdisc'),

    }
    verifyRoomType() {
         this.elements.roomTypeHeader()
             .should('be.visible')
         this.elements.todaysPriceHeader()
             .should('be.visible')
         this.elements.yourChoiceHeader()
             .should('be.visible')
         this.elements.roomDetails()
             .should('be.visible')
         this.elements.roomPrice()
             .should('be.visible')
        // this.elements.refundableFlag()
        //     .should('be.visible')
         this.elements.breakfastIncludedFlag()
             .should('be.visible')
        cy.wait(5000)
        homePage.elements.destinationField().type('Paris')
        //cy.get('.input-value-dest').eq(0).type('Paris')
        cy.get('.active-tab').click()
        cy.wait(3000)
    }
}
export default RoomDetailsPage