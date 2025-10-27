import { modalObjects } from "../../pageObjects/objects";

describe('Modal Tests', () => {
    beforeEach(() => {
        cy.visit(modalObjects.modalPageUrl);
    });

    it('MODAL_001	Open modal on delete button click', () => {
        cy.get(modalObjects.deleteItemButton).click();
        cy.get(modalObjects.modalSelector).should('be.visible');
    });

    it('MODAL_002	Close modal by clicking cancel button', () => {
        cy.get(modalObjects.deleteItemButton).click();
        cy.get(modalObjects.modalCancelButton).click();
        cy.get(modalObjects.item).should('exist');
    });

    it('MODAL_003	Confirm delete action from modal', () => {
        cy.get(modalObjects.deleteItemButton).click();
        cy.get(modalObjects.modalDeleteButton).click();
        cy.get(modalObjects.item).should('contain.text', 'Item has been deleted.');
    });

    it('MODAL_005	Press Escape key to close modal', () => {
        cy.get(modalObjects.deleteItemButton).click();
        cy.get('body').type('{esc}');
        cy.get(modalObjects.item).should('exist');
    });

    it('MODAL_006	Click outside modal to close it', () => {
        cy.get(modalObjects.deleteItemButton).click();
        cy.get(modalObjects.modalBackdrop).click({ force: true });
        cy.get(modalObjects.modalSelector).should('not.exist');
        cy.get(modalObjects.item).should('exist');
    });
});