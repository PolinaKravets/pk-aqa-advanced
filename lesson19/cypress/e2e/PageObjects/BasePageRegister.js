class BasePageRegister {
    get homeButton() {
      return cy.get("a.btn.header-link");
    }
  
    get signUpButton() {
      return cy.get("button[class='hero-descriptor_btn btn btn-primary']");
    }
    get signUpPopup() {
        return cy.get("div[class='modal-content']");
      
    }
    get signUpMainTitle(){
      return cy.get('.modal-title');
    }
    get signUpClose(){
        return cy.get("button[class='close']");

    }
    get signUpRegisterButton(){
      return cy.get("button[class='btn btn-primary']");

  }
  get signUpNameTitle(){
      return cy.get("input[id ='signupName']").prev();
    }
    get signUpLastNameTitle(){
      return cy.get("input[id ='signupLastName']").prev();
    }
    get signUpEmailTitle(){
      return cy.get("input[id ='signupEmail']").prev();
  }
  get signUpPasswordTitle(){
    return cy.get("input[id ='signupPassword']").prev();
  }
  get signUpRepPasswordTitle(){
  return cy.get("input[id ='signupRepeatPassword']").prev();
   }
   get signUpNameField(){
      return cy.get("input[id ='signupName']");
    }
    get signUpLastNameField(){
      return cy.get("input[id ='signupLastName']");
    }
    get signUpEmailField(){
      return cy.get("input[id ='signupEmail']");
  }
  get signUpPasswordField(){
    return cy.get("input[id ='signupPassword']");
  }
  get signUpRepPasswordField(){
  return cy.get("input[id ='signupRepeatPassword']");
 }
 get signUpNameValidation(){
  return cy.get('.form-group input[formcontrolname="name"] + .invalid-feedback p');
}
get signUpLastNameValidation(){
   return cy.get('.form-group input[formcontrolname="lastName"] + .invalid-feedback p');
}

get signUpEmailValidation(){
  return cy.get('.form-group input[formcontrolname="email"] + .invalid-feedback p');
}

get signUpPasswordValidation(){
  return cy.get('.form-group input[formcontrolname="password"] + .invalid-feedback p');
}
get signUpRepPasswordValidation(){
  return cy.get('.form-group input[formcontrolname="repeatPassword"] + .invalid-feedback p');
}
}
  export default BasePageRegister;