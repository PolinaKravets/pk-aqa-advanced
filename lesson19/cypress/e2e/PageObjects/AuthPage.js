class AuthData {
    defaultCredentials = {
        username: "guest",
        password: "welcome2qauto",
    };
    get url() {
        return Cypress.env('baseUrl');
    }

    navigateToMainPageWithAuth(credentials = this.defaultCredentials) {
        cy.visit(this.url, { auth: credentials});
    };

}

export default AuthData;