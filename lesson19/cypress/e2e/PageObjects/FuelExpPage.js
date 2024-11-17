class FuelExpPage {

   navigateToFuelExp(){
    return cy.get('a[routerlink="expenses"]');
   }
    
    addFuelButton() {
      return cy.get('.panel-page_heading .btn-primary');
    }
    
    addFuelPopupMainTitle(){
        return cy.get('.modal-title');

      }

      addFuelPopup() {
        return cy.get("div[class='modal-content']");
      
    }
    
      addFuelCarTitle() {
        return cy.get("select[id='addExpenseCar']").prev();
      }
    
      addFuelCarField() {
        return cy.get("select[id='addExpenseCar']");
      }
      addFuelDataTitle() {
        return cy.get("label[for='addExpenseDate']");
      }
    
      addFuelDataField() {
        return cy.get("select[id='addExpenseDate']");
      }
      addExpMiliageTitle() {
        return cy.get("label[for='addExpenseMileage']");
      }
    
      addExpMiliageField() {
        return cy.get("input[id='addExpenseMileage']");
      }

      addFuelLitresTitle() {
        return cy.get("label[for='addExpenseLiters']");
      }
      addFuelLitresField() {
        return cy.get("input[id='addExpenseLiters']");
      }

      addFuelCostTitle() {
        return cy.get("label[for='addExpenseTotalCost']");
      }
      addFuelCostField() {
        return cy.get("input[id='addExpenseTotalCost']");
      }

      addFuelClose(){
        return cy.get("button[class='close']");

    }
    addFuelAdd(){
        return cy.get('.modal-footer .btn-primary');

    }
    addFuelCancel(){
        return cy.get('.modal-footer .btn-secondary');

    }
    
     addFuelDelete(){
        return cy.get('button.btn.btn-delete');
     }
    
    
    addFuelConfirmDelete(){
        return cy.get('button.btn.btn-danger');
    }
}
  export default FuelExpPage;