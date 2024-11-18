class BasePageLogin {
    
    get signInButton() {
      return cy.get("button.btn.btn-outline-white.header_signin");
    }
    
      get signInEmailField() {
        return cy.get('input[formcontrolname="email"]');
      }
    
      get signInPasswordField() {
        return cy.get('input[formcontrolname="password"]');
      }
    
      get signInloginButton() {
        return cy.get('button[class="btn btn-primary"]');
      }
      
      login(email, password) {
        
        
        this.signInEmailField.type(email);
        this.signInPasswordField.type(password, { sensitive: true });
        this.signInloginButton.click();
        
      }
    }
    
  

  export default BasePageLogin;