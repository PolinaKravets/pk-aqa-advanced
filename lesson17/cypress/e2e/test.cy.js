describe('Перевірка Home page', () => {

    beforeEach(function() {
        cy.visit('');
      });


    it('Перевірка головного навігаційного меню', () => {
      cy.get('[class="navbar-brand"]').should('have.text', 'cypress.io');
    });
  
    it('Перевірка пунктів навігаційного меню', () => {
        cy.get('#navbar > ul:nth-child(1) > li.dropdown > a').should('have.text', 'Commands ');
        cy.get('#navbar > ul:nth-child(1) > li:nth-child(2) > a').should('have.text', 'Utilities');
        cy.get('#navbar > ul:nth-child(1) > li:nth-child(3) > a').should('have.text', 'Cypress API');
    });
  });