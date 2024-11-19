class GaragePage {

    get navigateToGaragePage(){
        return cy.get('a[routerlink="garage"]');
       }
    
       get addCarButton() {
      return cy.get('.panel-page_heading .btn-primary');
    }
    
    get addCarPopupMainTitle(){
        return cy.get('.modal-title');

      }

      get addCarPopup() {
        return cy.get("div[class='modal-content']");
      
    }
    
    get addCarBrandTitle() {
        return cy.get("select[id='addCarBrand']").prev();
      }
    
      get addCarBrandField() {
        return cy.get("select[id='addCarBrand']");
      }
      get addModelTitle() {
        return cy.get("select[id='addCarModel']").prev();
      }
    
      get addModelField() {
        return cy.get("select[id='addCarModel']");
      }
      get addMiliageTitle() {
        return cy.get("div[class='input-group']").prev();
      }
    
      get addMiliageField() {
        return cy.get("input[id='addCarMileage']");
      }

      get addCarClose(){
        return cy.get("button[class='close']");

    }
    get addCarAdd(){
        return cy.get('.modal-footer .btn-primary');

    }
    get addCarCancel(){
        return cy.get('.modal-footer .btn-secondary');

    }
    
    get addCarEdit(){
        return cy.get('span[class="icon icon-edit"]');
     }
     get addCarDelete(){
        return cy.get('button.btn.btn-outline-danger');
     }
    
     get addCarConfirmDelete(){
        return cy.get('button.btn.btn-danger');
    }

    get addCarCheckCar(){
        return cy.get('ul.car-list > li.car-item:first-of-type .car_name');
    }
}


  export default GaragePage;