import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('I Access the Page with {string}', (Scenario) => {

    console.log('---------------- Scenario: ' + Scenario + ' ----------------');

})

When ('I Enter First Name {string}', (FirstName) => {

    cy.EnterText('div[class="form-group"]',0, FirstName);

})



When ('I Enter First Name {string}', (LastName) => {

    cy.EnterText('div[class="form-group"]',1, LastName);

})


When ('I Enter First Name {string}', (PhoneNumber) => {

    cy.EnterText('div[class="form-group"]',2, PhoneNumber);

})



When ('I Enter Country {string}', (Country) => {

    cy.EnterText('select[id="countries_dropdown_menu"]',null,Country);

})



When ('I Enter First Name {string}', (EmailAddress) => {

    cy.EnterText('div[class="form-group"]',4,  EmailAddress);

})

When ('I Enter First Name {string}', (Password) => {

    cy.EnterText('div[class="form-group"]',5,  Password);

})



When ('I Click the Agreement {string}', (CheckAgreement) => {

    cy.SelectCheckbox('input[id="exampleCheck1"]',null,CheckAgreement);

})

Then ('Should Validate Submitted with {string} {string} {string} {string} {string}', (Expected, FirstName , LastName, PhoneNumber, Counter, Email ) => {

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Successfully registered the following information')
    cy.AssertToEqual('div[id="resultFn"]',null, null, 'First Name: Ruby Flor')
    cy.AssertToEqual('div[id="resultLn"]',null, null, 'Last Name: Blanco')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, 'Phone Number: 1234567890')
    cy.AssertToEqual('div[id="country"]',null, null, 'Country: Philippines')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, 'Email: rubyflordejesus@yahoo.com')
})


