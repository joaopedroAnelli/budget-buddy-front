describe('Login Spec', () => {
  it('should login', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('NEXT_REDIRECT');
      // return false to prevent the error from
      // failing this test
      return false;
    });

    cy.loginToAuth0(
      Cypress.env('auth0_username'),
      Cypress.env('auth0_password')
    );
  });
});
