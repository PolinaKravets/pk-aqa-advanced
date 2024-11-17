class GaragePage {

    navigateToGaragePage(){
        return cy.get('a[routerlink="garage"]');
       }
    
    addCarButton() {
      return cy.get('.panel-page_heading .btn-primary');
    }
    
    addCarPopupMainTitle(){
        return cy.get('.modal-title');

      }

      addCarPopup() {
        return cy.get("div[class='modal-content']");
      
    }
    
      addCarBrandTitle() {
        return cy.get("select[id='addCarBrand']").prev();
      }
    
      addCarBrandField() {
        return cy.get("select[id='addCarBrand']");
      }
      addModelTitle() {
        return cy.get("select[id='addCarModel']").prev();
      }
    
      addModelField() {
        return cy.get("select[id='addCarModel']");
      }
      addMiliageTitle() {
        return cy.get("div[class='input-group']").prev();
      }
    
      addMiliageField() {
        return cy.get("input[id='addCarMileage']");
      }

      addCarClose(){
        return cy.get("button[class='close']");

    }
    addCarAdd(){
        return cy.get('.modal-footer .btn-primary');

    }
    addCarCancel(){
        return cy.get('.modal-footer .btn-secondary');

    }
    
     addCarEdit(){
        return cy.get('span[class="icon icon-edit"]');
     }
     addCarDelete(){
        return cy.get('button.btn.btn-outline-danger');
     }
    
    addCarConfirmDelete(){
        return cy.get('button.btn.btn-danger');
    }

    addCarCheckCar(){
        return cy.get('ul.car-list > li.car-item:first-of-type .car_name');
    }
}


  export default GaragePage;