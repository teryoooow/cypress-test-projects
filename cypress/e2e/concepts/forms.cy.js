import { formObjects } from "../../pageObjects/objects";

const form_creds = Cypress.env('form_creds');

describe('Forms', () => {
    beforeEach(() => {
        cy.visit(formObjects.formPageUrl);
    });

    it('FORM_001 - Submit form with valid data', () => {
        cy.get(formObjects.fullNameInput).type(form_creds.fullname);
        cy.get(formObjects.emailInput).type(form_creds.email);
        cy.get(formObjects.phoneInput).type(form_creds.phone);
        cy.get(formObjects.eventButton).click();
        cy.get(formObjects.eventOption).click();
        cy.get(formObjects.ticketsInput).clear().type('2');
        cy.get(formObjects.submitButton).click();

        //Verify loader displays
        cy.contains('Submitting...').should('be.visible');

        // Confirmation message
        cy.contains('Confirm Registration').should('be.visible');
        cy.contains(form_creds.fullname).should('be.visible');
        cy.contains(form_creds.email).should('be.visible');
        cy.contains('Frontend Conf 2025').should('be.visible');
        cy.get(formObjects.confirmButton).click();
    });

    it('FORM_002 - Submit form with missing required fields', () => {
        cy.get(formObjects.fullNameInput).type(form_creds.fullname);

        // Verify register button is disabled
        cy.get(formObjects.submitButton).should('be.disabled');
    });

    it('FORM_003 - Invalid email format validation', () => {
        cy.get(formObjects.fullNameInput).type(form_creds.fullname);
        cy.get(formObjects.emailInput).type(form_creds.invalid_email);
        cy.get(formObjects.phoneInput).type(form_creds.phone);
        cy.get(formObjects.eventButton).click();
        cy.get(formObjects.eventOption).click();

        // Verify email validation message
        cy.contains('Enter a valid email address');
    });

    it('FORM_004 - Phone number with less than 7 digits', () => {
        cy.get(formObjects.fullNameInput).type(form_creds.fullname);
        cy.get(formObjects.emailInput).type(form_creds.email);
        cy.get(formObjects.phoneInput).type(form_creds.invalid_phone);
        cy.get(formObjects.eventButton).click();
        cy.get(formObjects.eventOption).click();
        cy.get(formObjects.ticketsInput).clear().type('2');

        // Verify phone validation message
        cy.contains('Enter a valid phone (7-15 digits)');
    });

    it('FORM_005 - Tickets less than 1', () => {
        cy.get(formObjects.fullNameInput).type(form_creds.fullname);
        cy.get(formObjects.emailInput).type(form_creds.email);
        cy.get(formObjects.phoneInput).type(form_creds.phone);
        cy.get(formObjects.eventButton).click();
        cy.get(formObjects.eventOption).click();
        cy.get(formObjects.ticketsInput).clear().type('0');
        cy.get(formObjects.ticketsInput).blur(); // Trigger validation

        // Verify tickets validation message
        cy.contains('Enter an integer between 1 and 10');
    });

    it('FORM_006 - Reset form fields', () => {
        cy.get(formObjects.fullNameInput).type(form_creds.fullname);
        cy.get(formObjects.emailInput).type(form_creds.email);
        cy.get(formObjects.phoneInput).type(form_creds.phone);
        cy.get(formObjects.eventButton).click();
        cy.get(formObjects.eventOption).click();
        cy.get(formObjects.ticketsInput).clear().type('2');
        cy.get(formObjects.resetButton).click();

        // Verify all fields are cleared
        cy.get(formObjects.fullNameInput).should('have.value', '');
        cy.get(formObjects.emailInput).should('have.value', '');
        cy.get(formObjects.phoneInput).should('have.value', '');
        cy.get(formObjects.ticketsInput).should('have.value', '1');
        cy.get(formObjects.eventButton).should('contain', 'Select Event');
    });

    it('FORM_007 - Multiple tickets generate unique IDs', () => {
        cy.get(formObjects.fullNameInput).type(form_creds.fullname);
        cy.get(formObjects.emailInput).type(form_creds.email);
        cy.get(formObjects.phoneInput).type(form_creds.phone);
        cy.get(formObjects.eventButton).click();
        cy.get(formObjects.eventOption2).click(); // Select "Automation Summit"
        cy.get(formObjects.ticketsInput).clear().type('3');
        cy.get(formObjects.submitButton).click();

        //Will assess that user is in Confirmation page
        cy.contains('Confirm Registration').should('be.visible');
        cy.contains(form_creds.fullname).should('be.visible');
        cy.contains(form_creds.email).should('be.visible');
        cy.contains('Automation Summit').should('be.visible');
        
        // Will assess that 3 unique ticket IDs are generated
        cy.get(formObjects.ticketID).should('have.length', 3).then(($tickets) => {
            const ids = $tickets.map((index, el) => Cypress.$(el).text()).get();
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).to.equal(ids.length);
    });

});

});

