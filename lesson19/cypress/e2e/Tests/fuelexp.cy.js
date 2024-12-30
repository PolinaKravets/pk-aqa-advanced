import AuthData from '../PageObjects/AuthPage.js';
import BasePageLogin from '../PageObjects/BasePageLogin.js';
import GaragePage from '../PageObjects/GaragePage.js';
import FuelExpPage from '../PageObjects/FuelExpPage.js';


const authData = new AuthData();
const basePageLog = new BasePageLogin();
const garagePage = new GaragePage();
const fuelPage = new FuelExpPage();

describe('Add fuel expence tests', () => {

    beforeEach(() => {
      authData.navigateToMainPageWithAuth();
      basePageLog.signInButton.click();
      const email = Cypress.env('email');
      const password = Cypress.env('password');
      basePageLog.login(email, password);
      cy.url().should('include', '/panel/garage');
      cy.addCar('Ford','Focus','10');
    fuelPage.navigateToFuelExp.click();
    cy.url().should('include', '/panel/expenses');
    fuelPage.addFuelButton.click();
 
    });

    after(() => {
        
    ///удаление всех машин в конце теста
         garagePage.navigateToGaragePage.click();
         cy.deleteAllCars();

        
    });

  it('Open and validate add fuel form', () => {
    //проверка попапа добавления машины
    fuelPage.addFuelPopup.should('be.visible');
    fuelPage.addFuelPopupMainTitle.should('have.text','Add an expense');
    fuelPage.addFuelCarTitle.should('have.text','Vehicle');
    fuelPage.addFuelDataTitle.should('have.text','Report date');
    fuelPage.addExpMiliageTitle.should('have.text','Mileage');
    fuelPage.addFuelLitresTitle.should('have.text','Number of liters');
    fuelPage.addFuelCostTitle.should('have.text','Total cost');
    fuelPage.addFuelAdd.should('have.prop', 'disabled', true);
    fuelPage.addFuelClose.should('exist').click();
    fuelPage.addFuelPopup.should('not.be.visible');
  });

  it('Add new expense to garage' ,() => {
  //проверка добавления нового expense
  fuelPage.addFuelPopup.should('be.visible');
  fuelPage.addExpMiliageField.focus().type('11');
  fuelPage.addFuelLitresField.focus().type('20');
  fuelPage.addFuelCostField.focus().type('10');
  fuelPage.addFuelAdd.click();
});

});