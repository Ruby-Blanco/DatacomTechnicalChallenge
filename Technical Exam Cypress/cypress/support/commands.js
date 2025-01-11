// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/*

Wait until this element loaded

*/
Cypress.Commands.add('waitUntilLoaded', (getelement) => {
    cy.get(getelement, { timeout: 10000 }).should('be.visible'); 
    });
    


/*

AssertToEqual
Check if the Expected text is equal to the screen

*/
Cypress.Commands.add('AssertToEqual', (getelement, pos, element2, Expected) => {
const element = pos == undefined || pos ==null ? cy.get(getelement): cy.get(getelement).eq(pos);

const completeelement  = element2 == undefined ||  element2 ==null ?  element  :  element.find(element2);

    completeelement.invoke('text').then((output) => {
            try {
                const cleanedOutput = output.replace(/\s+/g, ' ').trim();
                cy.log('UI Display: ' + cleanedOutput);

                const cleanedExpected = Expected.replace(/\s+/g, ' ').trim();
                cy.log('Expected: ' + cleanedExpected);
                expect(cleanedExpected).to.equal(cleanedOutput);

            } catch (error) {
                cy.log('Assertion failed: ' + error.message);
            }
        });
});




/*

EnterText

*/
Cypress.Commands.add('EnterText', (getelement, pos,  text) => {
const element = pos == undefined || pos ==null ? cy.get(getelement): cy.get(getelement).eq(pos);
if(text)
element.type(text)
});


/*

Select Text
Check if the Expected text is equal to the screen

*/
Cypress.Commands.add('SelectText', (getelement, pos, text) => {
const element = pos == undefined || pos ==null ? cy.get(getelement): cy.get(getelement).eq(pos);

element.select(text, { force: true })
});


/*

Check Existing element
availability= exist , notexist

*/
Cypress.Commands.add('CheckExistingElement',(getelement, pos, availability) => {
    const element = pos == undefined || pos ==null ? cy.get(getelement): cy.get(getelement).eq(pos);
    if(availability)
        element.should('exist')
    else   (availabilitynotexist) 
    element.should('not.exist')


    });
    
/*

SelectCheckbox

*/
Cypress.Commands.add('SelectCheckbox', (getelement, pos,  action) => {
    const element = pos == undefined || pos ==null ? cy.get(getelement): cy.get(getelement).eq(pos);
    
    if(action='Checked')
    element.then(($el) => {
            if ($el.prop('disabled')) {

                
               console.error('Error: The element with selector ${selector} is disabled and cannot be interacted with.');
            }
        })

        .click({ force: true })
        .then(() => {
            cy.log('The element with selector ${selector} has been clicked.');
        });
    });
   

    
/*

Click Button

*/
Cypress.Commands.add('ClickButton', (getelement, pos) => {
    const element = pos == undefined || pos ==null ? cy.get(getelement): cy.get(getelement).eq(pos);

    element.click({ force: true })
});



/*

VerifyTheValidation

*/
Cypress.Commands.add('VerifyTheValidation', (getelement, pos, message) => {
    const element = pos == undefined || pos ==null ? cy.get(getelement): cy.get(getelement).eq(pos);

    element.AssertToEqual(element,pos, null, message)
});
