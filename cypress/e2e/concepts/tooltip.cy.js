// import { describe } from "mocha";
import { tooltipObjects } from "../../pageObjects/objects";

describe('Tooltip Tests', () => {
    beforeEach(() => {
        cy.visit(tooltipObjects.tooltipPageUrl);
    });

    it('TOOLTIP_001	Render newsletter subscription form with tooltips', () => {
        cy.get(tooltipObjects.emailTooltip).trigger('mouseover');
        cy.get(tooltipObjects.emailTooltip).should('contain.text', 'We’ll send updates to this email.');
    });

    // it('TOOLTIP_002	Validate required fields with tooltip guidance', () => {
    //     cy.get(tooltipObjects.submitButton).click();
    //     cy.get(tooltipObjects.nameTooltip).should('be.visible').and('contain.text', 'Name is required.');
    //     cy.get(tooltipObjects.emailTooltip).should('be.visible').and('contain.text', 'Valid email is required.');
    // });

});