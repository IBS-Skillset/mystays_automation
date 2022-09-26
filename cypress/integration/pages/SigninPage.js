class SignInPage{

    elements={
        usernameField:()=>cy.get('#username'),
        passwordField:()=>cy.get(':nth-child(2) > .input-box'),
        signinButton:()=>cy.get('.btn-submit'),
        createOneButton:()=>cy.get('.text-blue-800')
    }

    typeUsername(username){
        this.elements.usernameField().should('be.visible').and('be.enabled')
        this.elements.usernameField().type(username)
        }
    
    typePassword(password){
        this.elements.passwordField().should('be.visible').and('be.enabled')
        this.elements.passwordField().type(password)
        }

    clickSigninButton(){
        this.elements.signinButton().should('be.visible').and('be.enabled')
        this.elements.signinButton().click();
        // this.url().should('contains','home')    
    }
    clickSigninButtonAndVerifyMessage(message){
        this.elements.signinButton().should('be.visible').and('be.enabled')
        this.elements.signinButton().click();
        cy.get('input:invalid').should('have.length', 1)
        cy.get('#username').then(($input) => {
        expect($input[0].validationMessage).to.eq(message)
        })   
    }

    clickCreateOneButton(){
        this.elements.signinButton().should('be.visible').and('be.enabled')
        this.elements.createOneButton().click();
        // this.url().should('contains','signup')    

    }
}
export default SignInPage;