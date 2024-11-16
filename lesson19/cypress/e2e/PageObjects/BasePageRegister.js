class BasePageRegister {
    homeButton() {
      return cy.get("a.btn.header-link");
    }
  
    signUpButton() {
      return cy.get("button[class='hero-descriptor_btn btn btn-primary']");
    }
    signUpPopup() {
        return cy.get("div[class='modal-content']");
      
    }
    signUpMainTitle(){
      return cy.get('.modal-title');
    }
    signUpClose(){
        return cy.get("button[class='close']");

    }
    signUpRegisterButton(){
      return cy.get("button[class='btn btn-primary']");

  }
    signUpNameTitle(){
      return cy.get("input[id ='signupName']").prev();
    }
    signUpLastNameTitle(){
      return cy.get("input[id ='signupLastName']").prev();
    }
    signUpEmailTitle(){
      return cy.get("input[id ='signupEmail']").prev();
  }
  signUpPasswordTitle(){
    return cy.get("input[id ='signupPassword']").prev();
  }
   signUpRepPasswordTitle(){
  return cy.get("input[id ='signupRepeatPassword']").prev();
   }
    signUpNameField(){
      return cy.get("input[id ='signupName']");
    }
    signUpLastNameField(){
      return cy.get("input[id ='signupLastName']");
    }
    signUpEmailField(){
      return cy.get("input[id ='signupEmail']");
  }
  signUpPasswordField(){
    return cy.get("input[id ='signupPassword']");
  }
 signUpRepPasswordField(){
  return cy.get("input[id ='signupRepeatPassword']");
 }
signUpNameValidation(){
  return cy.get('.form-group input[formcontrolname="name"] + .invalid-feedback p');
}
signUpLastNameValidation(){
   return cy.get('.form-group input[formcontrolname="lastName"] + .invalid-feedback p');
}

signUpEmailValidation(){
  return cy.get('.form-group input[formcontrolname="email"] + .invalid-feedback p');
}

signUpPasswordValidation(){
  return cy.get('.form-group input[formcontrolname="password"] + .invalid-feedback p');
}
signUpRepPasswordValidation(){
  return cy.get('.form-group input[formcontrolname="repeatPassword"] + .invalid-feedback p');
}
}
  export default BasePageRegister;