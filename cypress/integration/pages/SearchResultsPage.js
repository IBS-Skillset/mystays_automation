
class SearchResultsPage{
//includes the elements and methods in myStays.com Search Results Page

    elements={
        numberOfProperties:()=>cy.get('.text-2xl'),
        locationField:()=>cy.get('.flex > .w-full'),

        hotelOneComplete:()=>cy.get('.my-5 > :nth-child(1)'),
        hotelOneName:()=>cy.get(':nth-child(1) > .md\:grow > .items-center > :nth-child(1) > #hotel-name'),
        hotelOneRate:()=>cy.get(':nth-child(1) > .col-span-2 > .text-xl'),
        hotelOneCity:()=>cy.get(':nth-child(1) > .md\:grow > .items-center > :nth-child(1) > .grid-cols-1 > #hotel-city'),
        hotelOneAddress:()=>cy.get(':nth-child(1) > .md\:grow > .items-center > :nth-child(1) > .grid-cols-1 > #hotel-address'),
        hotelOneSeeAvailabilityButton:()=>cy.get(':nth-child(1) > .col-span-2 > .pt-2 > .btn-availability'),
        hotelOneImage:()=>cy.get(':nth-child(1) > :nth-child(1) > picture > .hotel-image'),
        hotelOneRating:()=>cy.get(':nth-child(1) > .md\:grow > .items-center > :nth-child(1) > .pl-1'),

        hotelTwoComplete:()=>cy.get('.my-5 > :nth-child(2)'),
        
    }
    verifyLocationField(){
        this.elements.locationField().should('be.visible').and('be.enabled')
       }
    displayFirstHotelDetails(){
        cy.log()
        
    }
   
}

export default SearchResultsPage