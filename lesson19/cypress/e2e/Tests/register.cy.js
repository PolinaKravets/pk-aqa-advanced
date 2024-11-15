import AuthData from '../PageObjects/AuthPage.js';
import BasePageRegister from '../PageObjects/BasePageRegister.js';
import { faker } from '@faker-js/faker';

const authData = new AuthData();
const basePageReg = new BasePageRegister();

describe('Registration validations tests', () => {

      beforeEach(() => {
        authData.navigateToMainPageWithAuth();
        basePageReg.SignUpButton().click();
        
        
      });
    it('Open and validate rigistration form', () => {
      //проверка попапа регстарции
      basePageReg.SignUpPopup().should('be.visible');
      basePageReg.SignUpMainTitle().should('have.text','Registration');
      basePageReg.SignUpNameTitle().should('have.text','Name');
      basePageReg.SignUpLastNameTitle().should('have.text','Last name');
      basePageReg.SignUpEmailTitle().should('have.text','Email');
      basePageReg.SignUpPasswordTitle().should('have.text','Password');
      basePageReg.SignUpRepPasswordTitle().should('have.text','Re-enter password');
      basePageReg.SignUpRegisterButton().should('have.prop', 'disabled', true);
      basePageReg.SignUpClose().should('exist').click();
      basePageReg.SignUpPopup().should('not.be.visible');
    });

  
    it('Validate empty fields', () => {
      //проверка валидации для name
      basePageReg.SignUpNameField().focus().blur();
      basePageReg.SignUpNameValidation()
      .should('be.visible')
      .and('contain', 'Name required'); 

// Проверка валидации для Last Name
     basePageReg.SignUpLastNameField().focus().blur();
     basePageReg.SignUpLastNameValidation()
    .should('be.visible')
    .and('contain', 'Last name required');

// Проверка валидации для Email
    basePageReg.SignUpEmailField().focus().blur();
    basePageReg.SignUpEmailValidation()
  .should('be.visible')
  .and('contain', 'Email required');

// Проверка валидации для Password
   basePageReg.SignUpPasswordField().focus().blur();
   basePageReg.SignUpPasswordValidation()
  .should('be.visible')
  .and('contain', 'Password required');

// Проверка валидации для Repeat Password
   basePageReg.SignUpRepPasswordField().focus().blur();
   basePageReg.SignUpRepPasswordValidation()
  .should('be.visible')
  .and('contain', 'Re-enter password required');
  // Проверка дизейбла кнопки регистации
  basePageReg.SignUpRegisterButton().should('have.prop', 'disabled', true);
    });
    
    it('Validate field length' , () => {
      //проверка валидации длины для name
      basePageReg.SignUpNameField().focus().type('a').blur();
      basePageReg.SignUpNameValidation()
      .should('be.visible')
      .and('contain', 'Name has to be from 2 to 20 characters long'); 

// Проверка валидации длины для Last Name
basePageReg.SignUpLastNameField().focus().type('a').blur();
basePageReg.SignUpLastNameValidation()
.should('be.visible')
.and('contain', 'Last name has to be from 2 to 20 characters long');
    

    // Проверка валидации длины для Password
   basePageReg.SignUpPasswordField().focus().type('a').blur();
   basePageReg.SignUpPasswordValidation()
  .should('be.visible')
  .and('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

// Проверка валидации для Repeat Password
   basePageReg.SignUpRepPasswordField().focus().type('a').blur();
   basePageReg.SignUpRepPasswordValidation()
  .should('be.visible')
  .and('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
  // Проверка дизейбла кнопки регистации
  basePageReg.SignUpRegisterButton().should('have.prop', 'disabled', true);
    
  });

  it('Validate wrong  data' , () => {
    //проверка валидации невалидных данных name
    basePageReg.SignUpNameField().focus().type('111').blur();
    basePageReg.SignUpNameValidation()
    .should('be.visible')
    .and('contain', 'Name is invalid'); 

// Проверка валидации невалидных данных Last Name
basePageReg.SignUpLastNameField().focus().type('===').blur();
basePageReg.SignUpLastNameValidation()
.should('be.visible')
.and('contain', 'Last name is invalid');

// Проверка невалидного имейла - только цифры
basePageReg.SignUpEmailField().focus().type('123456').blur();
basePageReg.SignUpEmailValidation()
.should('be.visible')
.and('contain', 'Email is incorrect');

// проверка невалидного имейла - без @
basePageReg.SignUpEmailField().focus().type('zarechpolinagmail.com').blur();
basePageReg.SignUpEmailValidation()
.should('be.visible')
.and('contain', 'Email is incorrect');

  // Проверка валидации невалидных данных пароля
 basePageReg.SignUpPasswordField().focus().type('1234567890').blur();
 basePageReg.SignUpPasswordValidation()
.should('be.visible')
.and('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

// Проверка валидации невалидных данных повтора пароля
 basePageReg.SignUpRepPasswordField().focus().type('1234567890').blur();
 basePageReg.SignUpRepPasswordValidation()
.should('be.visible')
.and('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
// Проверка дизейбла кнопки регистации
basePageReg.SignUpRegisterButton().should('have.prop', 'disabled', true);
  
});

it('Validate   re-entered password' , () => { 
basePageReg.SignUpNameField().focus().type('Paul');
basePageReg.SignUpLastNameField().focus().type('Wrent');
basePageReg.SignUpEmailField().focus().type('zarechpolina+pw@gmail.com');
basePageReg.SignUpPasswordField().focus().type('Qwerty123#');
basePageReg.SignUpRepPasswordField().focus().type('Qwerty12#').blur();
basePageReg.SignUpRepPasswordValidation()
.should('be.visible')
.and('contain', 'Passwords do not match');
basePageReg.SignUpRegisterButton().should('have.prop', 'disabled', true);

});
it('Succsessful registration' , () => { 
  let name = faker.person.firstName(); 
  let lastname = faker.person.lastName(); 
  let email = faker.internet.email();

  basePageReg.SignUpNameField().focus().type(name);
  basePageReg.SignUpLastNameField().focus().type(lastname);
  basePageReg.SignUpEmailField().focus().type(email);
  basePageReg.SignUpPasswordField().focus().type('Qwerty123#', { sensitive: true });
  basePageReg.SignUpRepPasswordField().focus().type('Qwerty123#', { sensitive: true }).blur();
  basePageReg.SignUpRegisterButton().should('have.prop', 'disabled', false);
  basePageReg.SignUpRegisterButton().click();
  cy.url().should('include', '/panel/garage');
  });
});
