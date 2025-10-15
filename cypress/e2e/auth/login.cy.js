// cypress/e2e/auth/login.cy.js
import { loginObjects } from '../../pageObjects/objects';

const creds = Cypress.env('creds');

// Test suite for login functionality
describe('Login Test', () => {

    beforeEach(() => {
        cy.visit(loginObjects.loginPageUrl);
    });

    afterEach(() => {
        cy.get('body').then(($body) => {
            if ($body.find(loginObjects.logoutButton).length > 0) {
                cy.get(loginObjects.logoutButton).click();
                cy.contains('Login').should('be.visible'); // Adjust selector/text as needed
            }
        });
    });

    it('should log in with admin credentials', () => {
        cy.get(loginObjects.usernameInput).type(creds.admin_username);
        cy.get(loginObjects.passwordInput).type(creds.admin_password);
        cy.submitLogin();

        cy.contains('Welcome, admin').should('be.visible'); // Adjust selector/text as needed
    });

    it('should log in with user credentials', () => {
        cy.get(loginObjects.usernameInput).type(creds.user_username);
        cy.get(loginObjects.passwordInput).type(creds.user_password);
        cy.submitLogin();

        cy.contains('Welcome, user').should('be.visible');
    });

    it ('should fail to log in with invalid credentials', () => {
        cy.get(loginObjects.usernameInput).type(creds.invalid_username);
        cy.get(loginObjects.passwordInput).type(creds.invalid_password);
        cy.submitLogin();

        cy.contains('Invalid username or password.').should('be.visible'); // Adjust selector/text as needed
    });

    it ('should fail to log in with empty credentials', () => {
        cy.submitLogin();

        cy.contains('Both fields are required.').should('be.visible'); // Adjust selector/text as needed
    });

});