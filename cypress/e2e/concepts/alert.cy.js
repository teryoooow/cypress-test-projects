import { alertObjects } from "../../pageObjects/objects";

describe('Alert Tests', () => {
    beforeEach(() => {
        cy.visit(alertObjects.alertPageUrl);
    });

    it('CONFIRM_001 - Show confirmation dialog on delete action' , () => {
        cy.get(alertObjects.deleteButton).click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Are you sure you want to delete this item?');
        });
    });

    it('CONFIRM_002 - Accept confirmation dialog' , () => {
        cy.get(alertObjects.deleteButton).click();
        cy.on('window:confirm', () => true);
        cy.get(alertObjects.successAlertMessage).should('exist');
    });

    it('CONFIRM_003 - Dismiss confirmation dialog' , () => {
        cy.get(alertObjects.deleteButton).click();
        cy.on('window:confirm', () => false);
        cy.get(alertObjects.deletionCancelledMessage).should('exist');
    });

    it('CONFIRM_004 - Validate confirm dialog message text' , () => {
        cy.get(alertObjects.deleteButton).click();  
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Are you sure you want to delete this item?');
        });
    });

    it('CONFIRM_005 - Prevent deletion if item already removed' , () => {
        // First deletion
        cy.get(alertObjects.deleteButton).click();
        cy.on('window:confirm', () => true);
        cy.get(alertObjects.successAlertMessage).should('exist');
        // Attempt to delete again
        cy.get(alertObjects.deleteButton).should('not.exist');
    });

});