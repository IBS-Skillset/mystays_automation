class RoomDetailsPage {
    //includes the elements and methods in myStays.com Room Details pop up    
    elements = {
        roomTypeHeader: () =>cy.get('.w-40'),
        todaysPriceHeader: () =>cy.get('.modal-header > .w-28'),
        yourChoiceHeader: () =>cy.get('.w-32 > .flex'),
        roomDetails: () =>cy.get('.modal-roomtype'),
        roomPrice: () =>cy.get('tbody > :nth-child(1) > .font-semibold > .flex'),
        breakfastIncludedFlag: () =>cy.get('.text-green-600'),
        breakfastExcludedFlag: () =>cy.get('.text-red-500'),
        refundableFlag: () =>cy.get(':nth-child(1) > .p-3.flex-col > :nth-child(2) > span > .listdisc')
    }
    verifyRoomType() {
        // this.elements.roomTypeHeader()
        //     .should('be.visible')
        // this.elements.todaysPriceHeader()
        //     .should('be.visible')
        // this.elements.yourChoiceHeader()
        //     .should('be.visible')
        this.elements.roomDetails()
            .should('be.visible')
        this.elements.roomPrice()
            .should('be.visible')
        this.elements.refundableFlag()
            .should('be.visible')
        this.elements.breakfastIncludedFlag()
            .should('be.visible')
    }

}
export default RoomDetailsPage