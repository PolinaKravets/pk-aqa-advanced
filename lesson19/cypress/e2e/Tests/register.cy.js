import AuthData from '../PageObjects/AuthPage.js';
import BasePageRegister from '../PageObjects/BasePageRegister.js';
import { faker } from '@faker-js/faker';

const authData = new AuthData();
const basePageReg = new BasePageRegister();

describe('Registration validations tests', () => {

      beforeEach(() => {
        authData.navigateToMainPageWithAuth();
        basePageReg.signUpButton.click();
        
        
      });
    it('Open and validate rigistration form', () => {
      //проверка попапа регстарции
      basePageReg.signUpPopup.should('be.visible');
      basePageReg.signUpMainTitle.should('have.text','Registration');
      basePageReg.signUpNameTitle.should('have.text','Name');
      basePageReg.signUpLastNameTitle.should('have.text','Last name');
      basePageReg.signUpEmailTitle.should('have.text','Email');
      basePageReg.signUpPasswordTitle.should('have.text','Password');
      basePageReg.signUpRepPasswordTitle.should('have.text','Re-enter password');
      basePageReg.signUpRegisterButton.should('have.prop', 'disabled', true);
      basePageReg.signUpClose.should('exist').click();
      basePageReg.signUpPopup.should('not.be.visible');
    });

  
    it('Validate empty fields', () => {
      //проверка валидации для name
      basePageReg.signUpNameField.focus().blur();
      basePageReg.signUpNameValidation
      .should('be.visible')
      .and('contain', 'Name required'); 

// Проверка валидации для Last Name
     basePageReg.signUpLastNameField.focus().blur();
     basePageReg.signUpLastNameValidation
    .should('be.visible')
    .and('contain', 'Last name required');

// Проверка валидации для Email
    basePageReg.signUpEmailField.focus().blur();
    basePageReg.signUpEmailValidation
  .should('be.visible')
  .and('contain', 'Email required');

// Проверка валидации для Password
   basePageReg.signUpPasswordField.focus().blur();
   basePageReg.signUpPasswordValidation
  .should('be.visible')
  .and('contain', 'Password required');

// Проверка валидации для Repeat Password
   basePageReg.signUpRepPasswordField.focus().blur();
   basePageReg.signUpRepPasswordValidation
  .should('be.visible')
  .and('contain', 'Re-enter password required');
  // Проверка дизейбла кнопки регистации
  basePageReg.signUpRegisterButton.should('have.prop', 'disabled', true);
    });
    
    it('Validate field length' , () => {
      //проверка валидации длины для name
      basePageReg.signUpNameField.focus().type('a').blur();
      basePageReg.signUpNameValidation
      .should('be.visible')
      .and('contain', 'Name has to be from 2 to 20 characters long'); 

// Проверка валидации длины для Last Name
basePageReg.signUpLastNameField.focus().type('a').blur();
basePageReg.signUpLastNameValidation
.should('be.visible')
.and('contain', 'Last name has to be from 2 to 20 characters long');
    

    // Проверка валидации длины для Password
   basePageReg.signUpPasswordField.focus().type('a').blur();
   basePageReg.signUpPasswordValidation
  .should('be.visible')
  .and('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

// Проверка валидации для Repeat Password
   basePageReg.signUpRepPasswordField.focus().type('a').blur();
   basePageReg.signUpRepPasswordValidation
  .should('be.visible')
  .and('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
  // Проверка дизейбла кнопки регистации
  basePageReg.signUpRegisterButton.should('have.prop', 'disabled', true);
    
  });

  it('Validate wrong  data' , () => {
    //проверка валидации невалидных данных name
    basePageReg.signUpNameField.focus().type('111').blur();
    basePageReg.signUpNameValidation
    .should('be.visible')
    .and('contain', 'Name is invalid'); 

// Проверка валидации невалидных данных Last Name
basePageReg.signUpLastNameField.focus().type('===').blur();
basePageReg.signUpLastNameValidation
.should('be.visible')
.and('contain', 'Last name is invalid');

// Проверка невалидного имейла - только цифры
basePageReg.signUpEmailField.focus().type('123456').blur();
basePageReg.signUpEmailValidation
.should('be.visible')
.and('contain', 'Email is incorrect');

// проверка невалидного имейла - без @
basePageReg.signUpEmailField.focus().type('zarechpolinagmail.com').blur();
basePageReg.signUpEmailValidation
.should('be.visible')
.and('contain', 'Email is incorrect');

  // Проверка валидации невалидных данных пароля
 basePageReg.signUpPasswordField.focus().type('1234567890').blur();
 basePageReg.signUpPasswordValidation
.should('be.visible')
.and('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

// Проверка валидации невалидных данных повтора пароля
 basePageReg.signUpRepPasswordField.focus().type('1234567890').blur();
 basePageReg.signUpRepPasswordValidation
.should('be.visible')
.and('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
// Проверка дизейбла кнопки регистации
basePageReg.signUpRegisterButton.should('have.prop', 'disabled', true);
  
});

it('Validate   re-entered password' , () => { 
basePageReg.signUpNameField.focus().type('Paul');
basePageReg.signUpLastNameField.focus().type('Wrent');
basePageReg.signUpEmailField.focus().type('zarechpolina+pw@gmail.com');
basePageReg.signUpPasswordField.focus().type('Qwerty123#');
basePageReg.signUpRepPasswordField.focus().type('Qwerty12#').blur();
basePageReg.signUpRepPasswordValidation
.should('be.visible')
.and('contain', 'Passwords do not match');
basePageReg.signUpRegisterButton.should('have.prop', 'disabled', true);

});
it('Succsessful registration' , () => { 
  let name = faker.person.firstName(); 
  let lastname = faker.person.lastName(); 
  let email = faker.internet.email();

  basePageReg.signUpNameField.focus().type(name);
  basePageReg.signUpLastNameField.focus().type(lastname);
  basePageReg.signUpEmailField.focus().type(email);
  basePageReg.signUpPasswordField.focus().type('Qwerty123#', { sensitive: true });
  basePageReg.signUpRepPasswordField.focus().type('Qwerty123#', { sensitive: true }).blur();
  basePageReg.signUpRegisterButton.should('have.prop', 'disabled', false);
  basePageReg.signUpRegisterButton.click();
  cy.url().should('include', '/panel/garage');
  });
});
