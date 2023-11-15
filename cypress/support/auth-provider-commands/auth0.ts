function loginViaAuth0Ui(username: string, password: string) {
  // App landing page redirects to Auth0.
  cy.visit('/');

  cy.intercept('/check-in*').as('checkIn');

  cy.get('[data-cy=start-button]').click();

  cy.intercept('/api/auth/login*').as('login');

  cy.wait('@checkIn');

  cy.wait('@login');

  // Login on Auth0.
  cy.origin(
    Cypress.env('auth0_domain'),
    { args: { username, password } },
    ({ username, password }) => {
      cy.get('input#1-email').type(username);
      cy.get('input#1-password').type(password, { log: false });
      cy.get('button#1-submit').click();

      cy.url().then((url) => {
        if (!url.includes('/u/consent')) return;

        cy.get('button[value="accept"]').click();
      });
    }
  );

  cy.wait('@checkIn');

  // Ensure Auth0 has redirected us back to the RWA.
  cy.url({ timeout: 15000 }).should('includes', '/app/user-profile');
}

Cypress.Commands.add('loginToAuth0', (username: string, password: string) => {
  const log = Cypress.log({
    displayName: 'AUTH0 LOGIN',
    message: [`🔐 Authenticating | ${username}`],
    // @ts-ignore
    autoEnd: false,
  });
  log.snapshot('before');

  loginViaAuth0Ui(username, password);

  log.snapshot('after');
  log.end();
});

declare namespace Cypress {
  interface Chainable<Subject> {
    loginToAuth0(username: string, password: string): Chainable<any>;
  }
}
