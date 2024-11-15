class BasePageLogin {
    
    SignInButton() {
      return cy.get("button.btn.btn-outline-white.header_signin");
    }
    
      SignInEmailField() {
        return cy.get('input[formcontrolname="email"]');
      }
    
      SignInPasswordField() {
        return cy.get('input[formcontrolname="password"]');
      }
    
      SignInloginButton() {
        return cy.get('button[class="btn btn-primary"]');
      }
      
      login(email, password) {
        
        
        this.SignInEmailField().type(email);
        this.SignInPasswordField().type(password, { sensitive: true });
        this.SignInloginButton().click();
        
      }
    }
    
  

  export default BasePageLogin;