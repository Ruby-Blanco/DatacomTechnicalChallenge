
describe('Verify Pages', () => {
    it('Verify Pages and form details', () => {
      cy.log(' This test case verify the text and buttons in the page');
      cy.visit(Cypress.env('url'));
      cy.waitUntilLoaded('h2');
      cy.AssertToEqual('h2',null, null,'CHALLENGE - Spot the BUGS!');      
      cy.AssertToEqual('small[id="challengeHelp"]',null, null,'This page contains at least 15 bugs. How many of them can you spot?');      
      cy.AssertToEqual('div[class="form-group"]',0, 'label','First Name');
      cy.AssertToEqual('div[class="form-group"]',1, 'label', 'Last Name*');
      cy.AssertToEqual('div[class="form-group"]',1, 'small',  'Note: All the fields marked with * are mandatory');
      cy.AssertToEqual('div[class="form-group"]',2, 'label', 'Phone Number*');
      cy.AssertToEqual('div[class="form-group"]',2, 'small', 'Phone length validation: at least 10 digits');
      cy.AssertToEqual('div[class="form-group"]',3, 'label', 'Country');
      cy.AssertToEqual('div[class="form-group"]',4, 'label', 'Email address*');
      cy.AssertToEqual('div[class="form-group"]',5, 'label', 'Password*');
      cy.AssertToEqual('div[class="form-group"]',5, 'small', 'Psw length validation: [6,20] characters');
      cy.AssertToEqual('div[class="form-check"]',null, 'label', 'I agree with the terms and conditions');
      
      cy.AssertToEqual('button[id="registerBtn"]',null, null, 'Register');

    })
    it('Happy Path -Submit Complete Form', () => {
      cy.log(' This test case verify the text and buttons in the page');
      cy.visit(Cypress.env('url'));
      cy.waitUntilLoaded('h2');
      //
      cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');
      cy.EnterText('div[class="form-group"]',1,  'Blanco');
      cy.EnterText('div[class="form-group"]',2, '1234567890');
      cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');
      cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');
      cy.EnterText('div[class="form-group"]',5, '1234567');
      cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
      
      cy.ClickButton('button[id="registerBtn"]',null);
  
      cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Successfully registered the following information')
      cy.AssertToEqual('div[id="resultFn"]',null, null, 'First Name: Ruby Flor')
      cy.AssertToEqual('div[id="resultLn"]',null, null, 'Last Name: Blanco')
      cy.AssertToEqual('div[id="resultPhone"]',null, null, 'Phone Number: 1234567890')
      cy.AssertToEqual('div[id="country"]',null, null, 'Country: Philippines')
      cy.AssertToEqual('div[id="resultEmail"]',null, null, 'Email: rubyflordejesus@yahoo.com')
    })

    it('Happy Path -Submit Complete Form Password 6characters', () => {
      cy.log(' This test case verify the text and buttons in the page');
      cy.visit(Cypress.env('url'));
      cy.waitUntilLoaded('h2');
      //
      cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');                   //FirstName
      cy.EnterText('div[class="form-group"]',1,  'Blanco');                     //LastName
      cy.EnterText('div[class="form-group"]',2, '1234567890');                  //PhoneNumber
      cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');//Country
      cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');   //email
      cy.EnterText('div[class="form-group"]',5, '123456');                     //Password
      cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
      
      cy.ClickButton('button[id="registerBtn"]',null);
  
      cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Successfully registered the following information')
      cy.AssertToEqual('div[id="resultFn"]',null, null, 'First Name: Ruby Flor')
      cy.AssertToEqual('div[id="resultLn"]',null, null, 'Last Name: Blanco')
      cy.AssertToEqual('div[id="resultPhone"]',null, null, 'Phone Number: 123456')
      cy.AssertToEqual('div[id="country"]',null, null, 'Country: Philippines')
      cy.AssertToEqual('div[id="resultEmail"]',null, null, 'Email: rubyflordejesus@yahoo.com')
    })

    it('Happy Path -Submit Complete Form Password 10 characters', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');                   //FirstName
    cy.EnterText('div[class="form-group"]',1,  'Blanco');                     //LastName
    cy.EnterText('div[class="form-group"]',2, '1234567890');                  //PhoneNumber
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');//Country
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');   //email
    cy.EnterText('div[class="form-group"]',5, '1234567890');                     //Password
  //  cy.AssertElementIsNotDisabled('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Successfully registered the following information')
    cy.AssertToEqual('div[id="resultFn"]',null, null, 'First Name: Ruby Flor')
    cy.AssertToEqual('div[id="resultLn"]',null, null, 'Last Name: Blanco')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, 'Phone Number: 1234567890')
    cy.AssertToEqual('div[id="country"]',null, null, 'Country: Philippines')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, 'Email: rubyflordejesus@yahoo.com')
  })



  it('Unhappy Path - Validate Required Field - Last Name', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');                   //FirstName
    cy.EnterText('div[class="form-group"]',1,  '');                     //LastName
    cy.EnterText('div[class="form-group"]',2, '1234567890');                  //PhoneNumber
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');//Country
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');   //email
    cy.EnterText('div[class="form-group"]',5, '1234567890');                     //Password
    cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Last Name should not be empty')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')

  })


  it('Unhappy Path - Validate Required Field - Phone number', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');                   //FirstName
    cy.EnterText('div[class="form-group"]',1,  'Blanco');                     //LastName
    cy.EnterText('div[class="form-group"]',2, '');                  //PhoneNumber
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');//Country
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');   //email
    cy.EnterText('div[class="form-group"]',5, '1234567890');                     //Password
    cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Phone number should not be empty')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')
  })


  
  it('Unhappy Path - Validate Required Field - Email Address', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');                   //FirstName
    cy.EnterText('div[class="form-group"]',1,  'Blanco');                     //LastName
    cy.EnterText('div[class="form-group"]',2, '1234567890');                  //PhoneNumber
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');//Country
    cy.EnterText('div[class="form-group"]',4, '');   //email
    cy.EnterText('div[class="form-group"]',5, '1234567890');                     //Password
    cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Email address should not be empty')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')
  
  })


  it('Unhappy Path - Validate Required Field - Password', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');                   //FirstName
    cy.EnterText('div[class="form-group"]',1,  'Blanco');                     //LastName
    cy.EnterText('div[class="form-group"]',2, '1234567890');                  //PhoneNumber
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');//Country
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');   //email
    cy.EnterText('div[class="form-group"]',5, '');                     //Password
    cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Password should not be empty')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')
    })

  it('Unhappy Path - Validate Phone Number (less than 10 digits)', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');                   //FirstName
    cy.EnterText('div[class="form-group"]',1,  'Blanco');                     //LastName
    cy.EnterText('div[class="form-group"]',2, '123456789');                  //PhoneNumber
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');//Country
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');   //email
    cy.EnterText('div[class="form-group"]',5, '123456789');                     //Password
    cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'The phone number should contain at least 10 characters!')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')
    })
  
  it('Unhappy Path - Validate Phone Number (10 alphabet char)', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');                   //FirstName
    cy.EnterText('div[class="form-group"]',1,  'Blanco');                     //LastName
    cy.EnterText('div[class="form-group"]',2, 'abcdefjhij');                  //PhoneNumber
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');//Country
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');   //email
    cy.EnterText('div[class="form-group"]',5, '1234567890');                     //Password
    cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'The phone number should contain at least 10 characters!')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')
    })

  



  it('Unhappy Path - Validate entered Email Address', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');                   //FirstName
    cy.EnterText('div[class="form-group"]',1,  'Blanco');                     //LastName
    cy.EnterText('div[class="form-group"]',2, '1234567890');                  //PhoneNumber
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');//Country
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus');   //email
    cy.EnterText('div[class="form-group"]',5, '1234567890');                     //Password
    cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Email address should be valid')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')
    })




  it('Unhappy Path - Validate Password (less than 6 digits)', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');
    cy.EnterText('div[class="form-group"]',1,  'Blanco');
    cy.EnterText('div[class="form-group"]',2, '1234567890');
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');
    cy.EnterText('div[class="form-group"]',5, '12345');
    cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Should not be able to submit. The password should contain between [6,20] characters!')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')
    })

  it('Unhappy Path - Validate Password (more than 10 digits)', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');
    cy.EnterText('div[class="form-group"]',1,  'Blanco');
    cy.EnterText('div[class="form-group"]',2, '1234567890');
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');
    cy.EnterText('div[class="form-group"]',5, '12345678901');
    cy.SelectCheckbox('input[id="exampleCheck1"]',null,'check');
    
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'The password should contain between [6,20] characters!')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')
    })


  it('Unhappy Path - Submit Complete Form - Unchecked I agree with the terms and conditions', () => {
    cy.log(' This test case verify the text and buttons in the page');
    cy.visit(Cypress.env('url'));
    cy.waitUntilLoaded('h2');
    //
    cy.EnterText('div[class="form-group"]',0, 'Ruby Flor');
    cy.EnterText('div[class="form-group"]',1,  'Blanco');
    cy.EnterText('div[class="form-group"]',2, '1234567890');
    cy.SelectText('select[id="countries_dropdown_menu"]',null, 'Philippines');
    cy.EnterText('div[class="form-group"]',4, 'rubyflordejesus@yahoo.com');
    cy.EnterText('div[class="form-group"]',5, '1234567');
  
    cy.ClickButton('button[id="registerBtn"]',null);

    cy.AssertToEqual('div[class="alert alert-danger"]',null, null, 'Should check I agree with the terms and conditions')
    cy.AssertToEqual('div[id="resultFn"]',null, null, '')
    cy.AssertToEqual('div[id="resultLn"]',null, null, '')
    cy.AssertToEqual('div[id="resultPhone"]',null, null, '')
    cy.AssertToEqual('div[id="country"]',null, null, '')
    cy.AssertToEqual('div[id="resultEmail"]',null, null, '')
    })
  })