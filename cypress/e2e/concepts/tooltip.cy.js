// import { describe } from "mocha";
import { tooltipObjects } from "../../pageObjects/objects";

describe('Tooltip Tests', () => {
    beforeEach(() => {
        cy.visit(tooltipObjects.tooltipPageUrl);
    });

    it('TOOLTIP_001	Render newsletter subscription form with tooltips', () => {
        cy.get(tooltipObjects.emailTooltip).trigger('mouseover');
        cy.contains('send updates to this email.').should('be.visible');
    });

    it('TOOLTIP_002	Validate required fields with tooltip guidance', () => {
        cy.get(tooltipObjects.submitButton).trigger('mouseover', { force: true });
        cy.contains('Fill all fields before submitting').should('be.visible');
    });

    it('TOOLTIP_003	Successful form submission with tooltips', () => {
        cy.get(tooltipObjects.emailInput).type('test@example.com');
        cy.get(tooltipObjects.topicInput).click();
        cy.get('ul[role="listbox"] > li').contains('Technology').click();
        cy.get(tooltipObjects.submitButton).click();
        cy.contains('🎉 Subscription successful!').should('be.visible');
    });

    it('TOOLTIP_004	Invalid email format validation', () => {
        cy.get(tooltipObjects.emailInput).type('user@invalid');
        cy.get(tooltipObjects.topicInput).click();
        cy.get('ul[role="listbox"] > li').contains('Sports').click();
        cy.get(tooltipObjects.submitButton).click();
        cy.contains('Fill all fields before submitting').should('be.visible');
    })
});