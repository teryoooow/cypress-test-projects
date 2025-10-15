// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginObjects, loginPageUrl } from '../pageObjects/objects';

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit(loginPageUrl);
});

Cypress.Commands.add('enterUsername', (username) => {
    cy.get(loginObjects.usernameInput).type(username);
});

Cypress.Commands.add('enterPassword', (password) => {
    cy.get(loginObjects.passwordInput).type(password);
});

Cypress.Commands.add('submitLogin', () => {
    cy.get(loginObjects.loginButton).click();
});
Cypress.Commands.add('login', (username, password) => {
    cy.visitLoginPage();
    cy.enterUsername(username);
    cy.enterPassword(password);
    cy.submitLogin();
}
);
