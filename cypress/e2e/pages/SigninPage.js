class SignInPage {
    //includes the elements and methods in myStays.com SignIn Page


    elements = {
        usernameField: () => cy.get('#username'),
        passwordField: () => cy.get(':nth-child(2) > .input-box'),
        signinButton: () => cy.get('.btn-continue'),
        createOneButton: () => cy.get('.p-4 > .text-white')
    }

    typeUsername(username) {
        this.elements.usernameField().should('be.visible').and('be.enabled')
        this.elements.usernameField().type(username)
    }

    typePassword(password) {
        this.elements.passwordField().should('be.visible').and('be.enabled')
        this.elements.passwordField().type(password)
    }

    //fixtures implementation
    typeFixturesUsername() {
        cy.fixture('testDataFile').then((user) => {
            this.user = user
            this.elements.usernameField()
                .should('be.visible')
                .and('be.enabled')
            this.elements.usernameField()
                .type(user.username)
        })
    }

    typeFixturesPassword() {
        cy.fixture('testDataFile').then((user) => {
            this.user = user
            this.elements.passwordField()
                .should('be.visible')
                .and('be.enabled')
            this.elements.passwordField()
                .type(user.password)
        })
    }

    clickSigninButton() {
        this.elements.signinButton()
            .should('be.visible')
            .and('be.enabled')
        this.elements.signinButton()
            .click();
    }

    //validation of login using invalid credentials
    clickSigninButtonAndVerifyMessage(message) {
        this.elements.signinButton()
            .should('be.visible')
            .and('be.enabled')
        this.elements.signinButton()
            .click();
        // cy.get('input:invalid').should('have.length', 1)
        cy.get('#username').then(($input) => {
            expect($input[0].validationMessage).to.eq(message)
        })
    }

    //button to create new user account
    clickCreateOneButton() {
        this.elements.signinButton().should('be.visible').and('be.enabled')
        this.elements.createOneButton().click();
        cy.url().should('contains','signup')    
    }

    //verify mail id populated in username field
    checkEmailIdInUsernameField(Emailaddress) {
            this.elements.usernameField()
                .should('be.visible')
                .and('be.enabled')
                .should('have.value',Emailaddress)
    }

    verifySignPage(){
        cy.url().should('include', '/signin')
    }
}
export default SignInPage;