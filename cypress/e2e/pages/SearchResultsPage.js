class SearchResultsPage {
    //includes the elements and methods in myStays.com Search Results Page    
    elements = {
        numberOfProperties: () => cy.get('.text-2xl'),
        locationField: () => cy.get('.flex > .w-full'),

        hotelResultsList: () => cy.get('.hotel-container grid grid-cols-2 md:flex'),
        hotelNameList: () => cy.get('#hotel-name'),
        hotelCityList: () => cy.get('#hotel-city'),
        hotelAddressList: () => cy.get('#hotel-address'),
        hotelSeeAvaialabilityButtonList: () => cy.get('.btn-availability.font-medium'),
        hotelImageList: () => cy.get('.hotel-image'),
        hotelRatingButton: () => cy.get('.grid pl-1 w-28 grid-cols-5'),

        seeAvaialabilityButtonOne:()=>cy.contains('See availability'),

        showMoreButton: () => cy.get('.btn-loadmore')
    }
    verifyLocationField() {
        this.elements.locationField().should('be.visible').and('be.enabled')
    }

    displayHotelDetails() {
        // this.elements.hotelResultsList().should('be.visible')
        this.elements.hotelNameList()
            .should('be.visible')
        this.elements.hotelCityList()
            .should('be.visible')
        this.elements.hotelAddressList()
            .should('be.visible')
        this.elements.seeAvaialabilityButtonOne()
            .should('be.visible')
        this.elements.hotelImageList()
            .should('be.visible')
        // this.elements.hotelRatingButton()
            // .should('be.visible')
        cy.log("Hotel search results are displayed")
    }
    displayHotelResultsLessThanTen(){
        // to get "Kochi: 6 properties found"
        cy.get('div[class="text-2xl md:text-3xl font-medium"]').then(($input) => {
            const txt=$input.text()
            cy.log(txt)
            const resultsNumberArray = txt.split(" ")
            expect(resultsNumberArray[1]).to.eq('6')
            expect(parseInt(resultsNumberArray[1])).to.be.lessThan(10) //checking results are less than 10
        })
        this.elements.showMoreButton()
            .should('not.exist')
    }

    getNumberOfHotels(location) {
        //method to get number of hotels ("Paris: 5 properties found")
        cy.get('div[class="text-2xl md:text-3xl font-medium"]').then(($number) => {
            const txt = $number.text()
            cy.log(txt)
            const resultsNumberArray = txt.split(":") //extracting only value of location from 'Paris: 5 properties found'
            // let locValue = resultsNumberArray[0]
            // cy.log(locValue)

            //verifying the location in search results is same as that of location in the input data
            expect(resultsNumberArray[0]).to.contains(location)
        })
    }

    clickOnSeeAvaialabilityButton(){
        this.elements.seeAvaialabilityButtonOne()
            .click()
        cy.wait(5000)
    }

    clickOnShowMoreButton(){
        this.elements.showMoreButton()
            .should('be.visible')
            .and('be.enabled')
            .click()
    }

    displayNoOfNights(){
        //cy.get(':nth-child(1) > .col-span-2 > .text-sm')
        cy.get(':nth-child(1) > .col-span-2 > .text-sm').should('have.text', '3 night')
        
    }

}
export default SearchResultsPage