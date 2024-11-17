import AuthData from '../PageObjects/AuthPage.js';
import BasePageLogin from '../PageObjects/BasePageLogin.js';


const authData = new AuthData();
const basePageLog = new BasePageLogin();

describe('Login', () => {

  beforeEach(() => {

    authData.navigateToMainPageWithAuth();
    basePageLog.signInButton().click();
    
  });

    it('Succsessful login', () => {
    
  const email = Cypress.env('email');
  const password = Cypress.env('password');
  basePageLog.login(email, password);
  cy.url().should('include', '/panel/garage');

    });
  
  });