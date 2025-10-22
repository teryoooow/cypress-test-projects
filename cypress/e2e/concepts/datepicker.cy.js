import { datepickerObjects } from "../../pageObjects/objects";

describe('Datepicker Tests', () => {
    // beforeEach(() => {
    //     cy.visit(datepickerObjects.datepickerPageUrl);
    // });

    it('EMP_001	Add a valid employment record', () => {
        cy.visit(datepickerObjects.datepickerPageUrl);
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Google');
        cy.get(datepickerObjects.dateInput).eq(0).type(datepickerObjects.startDateInput);
        cy.get(datepickerObjects.dateInput).eq(1).type(datepickerObjects.endDateInput).blur();
        cy.get(datepickerObjects.addButton).click();

        // Verify the employment record is added
        cy.contains('Google').should('exist');
        cy.contains('2022-01-01').should('exist');
        cy.contains('2023-01-01').should('exist');
    });
});