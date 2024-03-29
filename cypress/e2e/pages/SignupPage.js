class SignupPage {
  //includes the elements and methods in myStays.com Signup Page

  elements = {
    emailAddress: () => cy.get('#email'),
    firstName: () => cy.get('#fname'),
    lastName: () => cy.get('#lname'),
    phoneNumber: () => cy.get('#phoneNumber'),
    password: () => cy.get('#password'),

    continueButton: () => cy.get('.btn-continue'),
    signupSuccessMessage: () => cy.get('.message'),
  }

  typeEmailAddress(Emailaddress) {
    this.elements
      .emailAddress()
      .should('be.visible')
      .and('be.enabled')
      .type(Emailaddress)
  }
  typeFirstName(Firstname) {
    this.elements
      .firstName()
      .should('be.visible')
      .and('be.enabled')
      .type(Firstname)
  }
  typeLastName(Lastname) {
    this.elements
      .lastName()
      .should('be.visible')
      .and('be.enabled')
      .type(Lastname)
  }
  typePhoneNumber(Phonenumber) {
    this.elements
      .phoneNumber()
      .should('be.visible')
      .and('be.enabled')
      //used removeAttr here to type '+' in PhoneNumber field as .type() was not allowing to type it in number type field
      .invoke('removeAttr', 'type')
      .click()
      .clear()
      .type(Phonenumber)
  }
  typePassword(Password) {
    this.elements
      .password()
      .should('be.visible')
      .and('be.enabled')
      .type(Password)
  }
  clickContinueButton() {
    this.elements
      .continueButton()
      .should('be.visible')
      .and('be.enabled')
      .click()
  }
  //verify account creation is success or not
  verifySuccessAccountCreation(successMessage) {
    this.elements.signupSuccessMessage().should('be.visible')
    cy.get('.message').then(function (e) {
      const t = e.text()
      expect(t).to.contains(successMessage)
    })
    //code to check in DB after account creation
    cy.task('READFROMDB', {
      dbConfig: Cypress.config('db'),
      sql: "SELECT * FROM mystays.users where email IN ('test@gmail.com')",
    }).then((result) => {
      console.log(result)
      cy.log(result)
      // expect(result).to.equal(1)
      // expect(result.rows[0].email).to.have.string("test@gmail.com");
    })

    // cy.task('READFROMDB',
    // {
    //     dbConfig: Cypress.config('db'),
    //     sql:'SELECT COUNT(*) as "rowCount" FROM mystays.users WHERE email like 'test@gmail.com''
    // }).then((result)=>
    // {
    //     console.log(result)
    // })
  }
  //validation when invalid values are entered
  clickContinueButtonAndVerifyMessage() {
    this.elements
      .continueButton()
      .should('be.visible')
      .and('be.enabled')
      .click()
    cy.get(':nth-child(2) > .label > .errorMsg').then(function (e) {
      //method text to obtain text content
      const t = e.text()
      expect(t).to.contains('*Email is required')
    })
    cy.get(':nth-child(3) > .label > .errorMsg').then(function (e) {
      const t = e.text()
      expect(t).to.contains('Please enter first name')
    })
    cy.get(':nth-child(4) > .label > .errorMsg').then(function (e) {
      const t = e.text()
      expect(t).to.contains('Please enter last name')
    })
    //  cy.get(':nth-child(6) > .label > .errorMsg').then(function(e){
    //     const t = e.text()
    //     expect(t).to.contains("*Password is required")
    //  })
  }
  //to get the validation message
  clickContinueButtonAndVerifyValMessage(message) {
    this.elements
      .continueButton()
      .should('be.visible')
      .and('be.enabled')
      .click()
    //Implementation of Alert text verification
    cy.on('window:alert', (t) => {
      //assertions
      expect(t).to.contains(message)
    })
  }
}
export default SignupPage
