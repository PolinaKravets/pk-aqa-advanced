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

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false;
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      });
    }
  
    return originalFn(element, text, options);
  });

  import GaragePage from '../e2e/PageObjects/GaragePage';
  import FuelExpPage from '../e2e/PageObjects/FuelExpPage';
  import dayjs from 'dayjs';
  
  const garagePage = new GaragePage();
  const fuelPage = new FuelExpPage();
  

  Cypress.Commands.add('addCar', (brand, model, miliage) => {

    
  garagePage.addCarButton.click();
  garagePage.addCarBrandField.select(brand);
  garagePage.addModelField.select(model);
  garagePage.addMiliageField.focus().type(miliage);
  garagePage.addCarAdd.click();
  cy.wait(500);

  
  });

  Cypress.Commands.add('deleteAllCars', () => {

    
    garagePage.addCarEdit.each(($btn) => {
        cy.wrap($btn).click();
        garagePage.addCarDelete.click();
        cy.wait(1000);
        garagePage.addCarConfirmDelete.click();
      });
  
    });

    Cypress.Commands.add('deleteFuel', () => {

    
            fuelPage.addFuelDelete.each(($btn) => {
            cy.wrap($btn).click({ force: true });
            fuelPage.addFuelConfirmDelete.click({ force: true });
    
        });
    });

    Cypress.Commands.add('addFuelApi', (carId, miliage, litres, cost) =>{
        const currentDate = dayjs().format('YYYY-MM-DD');
        cy.request({
            method: 'POST',
            url: '/api/expenses',
            failOnStatusCode: false,
            responseTimeout: 30000,
            body: {
                 "carId": carId, 
                 "reportedAt": currentDate,
                  "mileage": miliage,
                  "liters": litres,
                  "totalCost": cost,
                  "forceMileage": false
                 },

     });

    });
