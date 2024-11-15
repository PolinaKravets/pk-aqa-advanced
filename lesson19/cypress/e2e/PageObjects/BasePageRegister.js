class BasePageRegister {
    homeButton() {
      return cy.get("a.btn.header-link");
    }
  
    SignUpButton() {
      return cy.get("button[class='hero-descriptor_btn btn btn-primary']");
    }
    SignUpPopup() {
        return cy.get("div[class='modal-content']");
      
    }
    SignUpMainTitle(){
      return cy.get('.modal-title');
    }
    SignUpClose(){
        return cy.get("button[class='close']");

    }
    SignUpRegisterButton(){
      return cy.get("button[class='btn btn-primary']");

  }
    SignUpNameTitle(){
      return cy.get("input[id ='signupName']").prev();
    }
    SignUpLastNameTitle(){
      return cy.get("input[id ='signupLastName']").prev();
    }
    SignUpEmailTitle(){
      return cy.get("input[id ='signupEmail']").prev();
  }
  SignUpPasswordTitle(){
    return cy.get("input[id ='signupPassword']").prev();
  }
   SignUpRepPasswordTitle(){
  return cy.get("input[id ='signupRepeatPassword']").prev();
   }
    SignUpNameField(){
      return cy.get("input[id ='signupName']");
    }
    SignUpLastNameField(){
      return cy.get("input[id ='signupLastName']");
    }
    SignUpEmailField(){
      return cy.get("input[id ='signupEmail']");
  }
  SignUpPasswordField(){
    return cy.get("input[id ='signupPassword']");
  }
 SignUpRepPasswordField(){
  return cy.get("input[id ='signupRepeatPassword']");
 }
SignUpNameValidation(){
  return cy.get('.form-group input[formcontrolname="name"] + .invalid-feedback p');
}
SignUpLastNameValidation(){
   return cy.get('.form-group input[formcontrolname="lastName"] + .invalid-feedback p');
}

SignUpEmailValidation(){
  return cy.get('.form-group input[formcontrolname="email"] + .invalid-feedback p');
}

SignUpPasswordValidation(){
  return cy.get('.form-group input[formcontrolname="password"] + .invalid-feedback p');
}
SignUpRepPasswordValidation(){
  return cy.get('.form-group input[formcontrolname="repeatPassword"] + .invalid-feedback p');
}
}
  export default BasePageRegister;