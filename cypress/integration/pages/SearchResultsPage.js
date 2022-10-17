
class SearchResultsPage{
//includes the elements and methods in myStays.com Search Results Page

    elements={
        numberOfProperties:()=>cy.get('.text-2xl'),
        locationField:()=>cy.get('.flex > .w-full'),

        hotelResultsList:()=>cy.get('.hotel-container grid grid-cols-2 md:flex'),
        hotelNameList:()=>cy.get('#hotel-name'),
        hotelCityList:()=>cy.get('#hotel-city'),
        hotelAddressList:()=>cy.get('#hotel-address'),
        hotelSeeAvaialabilityButtonList:()=>cy.get('.btn-availability.font-medium'),
        hotelImageList:()=>cy.get('.hotel-image'),
        hotelRatingButton:()=>cy.get('.grid pl-1 w-28 grid-cols-5')
    }
    verifyLocationField(){
        this.elements.locationField().should('be.visible').and('be.enabled')
       }
    displayHotelDetails(){
        // this.elements.hotelResultsList().should('be.visible')
        this.elements.hotelNameList().should('be.visible')
        this.elements.hotelCityList().should('be.visible')
        this.elements.hotelAddressList().should('be.visible')
        this.elements.hotelSeeAvaialabilityButtonList().should('be.visible')
        this.elements.hotelImageList().should('be.visible')
        // this.elements.hotelRatingButton().should('be.visible')
        cy.log("Hotel search results are displayed")
    }
    getNumberOfHotels(){
            //method to get number of hotels
            let txt = []
            cy.get('.text-2xl').then(function(e){
            txt.push(e)
            })
            cy.log("Total number of Hotels",txt)        
            }
    }
   


export default SearchResultsPage