import AuthData from '../PageObjects/AuthPage.js';
import BasePageLogin from '../PageObjects/BasePageLogin.js';
import GaragePage from '../PageObjects/GaragePage.js';
import FuelExpPage from '../PageObjects/FuelExpPage.js';
import dayjs from 'dayjs';


const authData = new AuthData();
const basePageLog = new BasePageLogin();
const garagePage = new GaragePage();
const fuelPage = new FuelExpPage();


describe('Intersepting and API requests Cars and Fuel', () => {

  
      beforeEach(function() {
        cy.intercept('POST', '/api/auth/signin').as('signInRequest');
        authData.navigateToMainPageWithAuth();
        basePageLog.signInButton.click();
        const email = Cypress.env('email');
        const password = Cypress.env('password');
        basePageLog.login(email, password);
        cy.wait('@signInRequest').then((resp)=>{
            expect(resp.response.statusCode).to.equal(200);
            cy.wrap(resp.response.headers['set-cookie'][0])
            .then((cookie) => {
                // Извлекаем значение `sid`
                const sid = cookie.split(';')[0].split('=')[1];
                cy.wrap(sid).as('sid');
        });
        cy.intercept('POST', '/api/cars').as('addCarRequest');
        cy.intercept('POST', '').as('signInRequest');
        cy.addCar('Audi', 'TT','20');
        cy.wait('@addCarRequest').then((xhr) => {
            expect(xhr.response.statusCode).to.equal(201);
            expect(xhr.response.body.data.brand).to.equal('Audi');
            expect(xhr.response.body.data.model).to.equal('TT');
            cy.wrap(xhr.response.body.data.id).as('car_id');
        cy.setCookie('sid', this.sid);   
         });
        });
    });
    

     after(() => {
        
    //удаление всех машин в конце теста
       garagePage.navigateToGaragePage.click();
      cy.deleteAllCars();

        
     });
    
    
      it('Check created car API', function() {
        cy.request({
            method: 'GET',            
            url: '/api/cars',                   
            failOnStatusCode: false
          })
          .then((response) => {
                expect(response.status).to.equal(200);
                const carId = this.car_id;
                const carsArray = response.body.data;
                const isCarIdPresent = carsArray.some(car => car.id === carId);
                expect(isCarIdPresent).to.be.true;
            });
        });
    

    it('Create new expense  API', function() {
        const carId = this.car_id;
        const mileage = 113;
        const litres = 11;
        const cost = 20;
        const displayedDate = dayjs().format('DD.MM.YYYY');
     
        cy.addFuelApi(carId, mileage, litres, cost)  
          .then((response) => {
                cy.wait(5000);
                console.log(response);
                expect(response.status).to.equal(200);
                expect(response.body.data.carId).to.equal(carId);
                expect(response.body.data.mileage).to.equal(mileage); 
                expect(response.body.data.liters).to.equal(litres); 
                expect(response.body.data.id).to.exist;
                  

            });
            cy.reload();
            cy.get('ul.car-list > li.car-item').contains('Audi TT');
            cy.get('ul.car-list > li.car-item').contains(displayedDate);
            cy.get('input[name="miles"]').invoke('val').then((value) => {
                expect(value).to.equal('113');
            });   
        });
             
        
           });
       
    
