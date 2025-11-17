import { multiwindowObjects } from "../../pageObjects/objects";

describe('multiwindow tests', () => {
    beforeEach(() => {
        cy.visit(multiwindowObjects.multiwindowPageUrl);
    });

    it('QUICKLINKS_001    Open link in new tab', () => {
        cy.get(multiwindowObjects.learnAboutButtonLink).find('a').invoke('removeAttr', 'target').click();
        cy.url().should('include', '/concepts/button');
        // Assuming the button page has some unique content to verify
        cy.contains('Follow').should('be.visible'); 
    });

    it('QUICKLINKS_002    Open link in new window', () => {
        cy.get(multiwindowObjects.learnAboutTimePickerLink).find('a').invoke('removeAttr', 'target').click();
        cy.url().should('include', '/concepts/timepicker');
        cy.contains('Confirm').should('be.visible');
    });

    it('QUICKLINKS_003 Broken or missing navigation', () => {
        cy.visit('/concepts/xyz', { failOnStatusCode: false });
        cy.get('body').should('contain', '404 - Page Not Found');
    });
});