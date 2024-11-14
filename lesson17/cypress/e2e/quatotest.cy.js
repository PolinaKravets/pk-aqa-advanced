describe('Qatro Home page test', () => {

    beforeEach(function() {
        cy.visit('https://qauto.forstudy.space/', { auth: 
            {
                username: "guest",
                password: "welcome2qauto",
            }
        });
      });


    it('Header buttons test', () => {
      cy.get('a.btn.header-link').should('exist').should('have.text', 'Home');
      cy.get("button[appscrollto = 'aboutSection']").should('exist').should('have.text', 'About');
      cy.get("button[appscrollto='contactsSection']").should('exist').should('have.text', 'Contacts');
      cy.get("button[class='header-link -guest']").should('exist').should('have.text', 'Guest log in');
      cy.get("button[class='btn btn-outline-white header_signin']").should('exist').should('have.text', 'Sign In');
    });
  
    it('Footer buttons test', () => {
        cy.get("span[class='socials_icon icon icon-facebook']").should('exist')
        .parents('a')
        .should('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School');
        cy.get("span[class='socials_icon icon icon-telegram']").should('exist')
        .parents('a')
        .should('have.attr', 'href', 'https://t.me/ithillel_kyiv');
        cy.get("span[class='socials_icon icon icon-youtube']").should('exist')
        .parents('a')
        .should('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
        cy.get("span[class='socials_icon icon icon-instagram']").should('exist')
        .parents('a')
        .should('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/');
        cy.get("span[class='socials_icon icon icon-linkedin']").should('exist')
        .parents('a')
        .should('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/');
        cy.get("a[class='contacts_link display-4']").should('exist').should('contain.text', 'ithillel.ua');
        cy.get("a[class='contacts_link h4']").should('exist').should('contain.text', 'support@ithillel.ua');
    });
  });