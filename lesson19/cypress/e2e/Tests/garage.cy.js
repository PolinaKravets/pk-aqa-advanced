import AuthData from '../PageObjects/AuthPage.js';
import BasePageLogin from '../PageObjects/BasePageLogin.js';
import GaragePage from '../PageObjects/GaragePage.js';

const authData = new AuthData();
const basePageLog = new BasePageLogin();
const garagePage = new GaragePage();

describe('Add car tests', () => {

    beforeEach(() => {
      authData.navigateToMainPageWithAuth();
      basePageLog.signInButton().click();
      const email = Cypress.env('email');
      const password = Cypress.env('password');
      basePageLog.login(email, password);
      cy.url().should('include', '/panel/garage');
      garagePage.addCarButton().click();
      
    });

    after(() => {
        //удаление всех машин в конце теста
       cy.deletecar();
      });

  it('Open and validate add car form', () => {
    //проверка попапа добавления машины
    garagePage.addCarPopup().should('be.visible');
    garagePage.addCarPopupMainTitle().should('have.text','Add a car');
    garagePage.addCarBrandTitle().should('have.text','Brand');
    garagePage.addModelTitle().should('have.text','Model');
    garagePage.addMiliageTitle().should('have.text','Mileage');
    garagePage.addCarAdd().should('have.prop', 'disabled', true);
    garagePage.addCarClose().should('exist').click();
    garagePage.addCarPopup().should('not.be.visible');
  });

  it('Add new car to garage' ,() => {
  //проверка добавления новой машины
  garagePage.addCarPopup().should('be.visible');
  garagePage.addCarBrandField().select('Ford');
  garagePage.addModelField().select('Focus');
  garagePage.addMiliageField().focus().type('10');
  garagePage.addCarAdd().click();
  garagePage.addCarCheckCar().should('have.text', 'Ford Focus');
});


});