class BasePageLogin {
    
    signInButton() {
      return cy.get("button.btn.btn-outline-white.header_signin");
    }
    
      signInEmailField() {
        return cy.get('input[formcontrolname="email"]');
      }
    
      signInPasswordField() {
        return cy.get('input[formcontrolname="password"]');
      }
    
      signInloginButton() {
        return cy.get('button[class="btn btn-primary"]');
      }
      
      login(email, password) {
        
        
        this.signInEmailField().type(email);
        this.signInPasswordField().type(password, { sensitive: true });
        this.signInloginButton().click();
        
      }
    }
    
  

  export default BasePageLogin;