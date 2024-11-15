class AuthData {
    defaultCredentials = {
        username: "guest",
        password: "welcome2qauto",
    };

    navigateToMainPageWithAuth(credentials = this.defaultCredentials) {
        cy.visit('https://qauto.forstudy.space/', { auth: credentials});
    };

}

export default AuthData;