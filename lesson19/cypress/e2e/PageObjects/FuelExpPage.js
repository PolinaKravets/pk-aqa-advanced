class FuelExpPage {

    get navigateToFuelExp(){
    return cy.get('a[routerlink="expenses"]');
   }
    
   get addFuelButton() {
      return cy.get('.panel-page_heading .btn-primary');
    }
    
    get addFuelPopupMainTitle(){
        return cy.get('.modal-title');

      }

      get addFuelPopup() {
        return cy.get("div[class='modal-content']");
      
    }
    
    get addFuelCarTitle() {
        return cy.get("select[id='addExpenseCar']").prev();
      }
    
      get addFuelCarField() {
        return cy.get("select[id='addExpenseCar']");
      }
      get addFuelDataTitle() {
        return cy.get("label[for='addExpenseDate']");
      }
    
      get addFuelDataField() {
        return cy.get("select[id='addExpenseDate']");
      }
      get addExpMiliageTitle() {
        return cy.get("label[for='addExpenseMileage']");
      }
    
      get addExpMiliageField() {
        return cy.get("input[id='addExpenseMileage']");
      }

      get addFuelLitresTitle() {
        return cy.get("label[for='addExpenseLiters']");
      }
      get addFuelLitresField() {
        return cy.get("input[id='addExpenseLiters']");
      }

      get addFuelCostTitle() {
        return cy.get("label[for='addExpenseTotalCost']");
      }
      get addFuelCostField() {
        return cy.get("input[id='addExpenseTotalCost']");
      }

      get addFuelClose(){
        return cy.get("button[class='close']");

    }
    get addFuelAdd(){
        return cy.get('.modal-footer .btn-primary');

    }
    get addFuelCancel(){
        return cy.get('.modal-footer .btn-secondary');

    }
    
    get addFuelDelete(){
        return cy.get('button.btn.btn-delete');
     }
    
    
     get addFuelConfirmDelete(){
        return cy.get('button.btn.btn-danger');
    }
}
  export default FuelExpPage;