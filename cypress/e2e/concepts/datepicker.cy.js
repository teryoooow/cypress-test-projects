import { datepickerObjects } from "../../pageObjects/objects";

describe('Datepicker Tests', () => {
    beforeEach(() => {
        cy.visit(datepickerObjects.datepickerPageUrl);
    });

    it('EMP_001	Add a valid employment record', () => {
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

    it('EMP_002 - Try adding overlapping employment dates', () => {
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Google');
        cy.get(datepickerObjects.dateInput).eq(0).type(datepickerObjects.startDateInput);
        cy.get(datepickerObjects.dateInput).eq(1).type(datepickerObjects.endDateInput).blur();
        cy.get(datepickerObjects.addButton).click();

        // Verify the employment record is added
        cy.contains('Google').should('exist');
        cy.contains('2022-01-01').should('exist');
        cy.contains('2023-01-01').should('exist');

        // 2nd employment with overlapping dates
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Microsoft');
        cy.get(datepickerObjects.dateInput).eq(0).type(datepickerObjects.startDateInput);
        cy.get(datepickerObjects.dateInput).eq(1).type(datepickerObjects.endDateInput).blur();
        cy.get(datepickerObjects.addButton).click();
        
        //Verify error message for overlapping dates
        cy.contains('Overlapping employment detected. Please adjust the dates.').should('exist');
    });

    it('EMP_003	Add multiple non-overlapping employment records', () => {

        // 1st employment
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Google');
        cy.get(datepickerObjects.dateInput).eq(0).type('2020-01-01');
        cy.get(datepickerObjects.dateInput).eq(1).type('2021-01-01').blur();
        cy.get(datepickerObjects.addButton).click();
        // Verify the 1st employment record is added
        cy.contains('Google').should('exist');
        cy.contains('2020-01-01').should('exist');
        cy.contains('2021-01-01').should('exist');
        // 2nd employment
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Microsoft');
        cy.get(datepickerObjects.dateInput).eq(0).type('2021-02-01');
        cy.get(datepickerObjects.dateInput).eq(1).type('2022-02-01').blur();
        cy.get(datepickerObjects.addButton).click();
        // Verify both employment records are present
        cy.contains('Google').should('exist');
        cy.contains('2020-01-01').should('exist');
        cy.contains('2021-01-01').should('exist');
        cy.contains('Microsoft').should('exist');
        cy.contains('2021-02-01').should('exist');
        cy.contains('2022-02-01').should('exist');
    });

    it('EMP_004 - Try adding a job without selecting any date', () => {
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Google');
        // Leave date fields empty
        cy.get(datepickerObjects.addButton).should('be.disabled');
        // Verify error message for missing dates
        cy.contains('Fill all the mandatory fields!').should('exist');
    })

    it('EMP_005 - Try adding a job where end date is before start date', () => {
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Google');
        cy.get(datepickerObjects.dateInput).eq(0).type('2023-01-01');
        cy.get(datepickerObjects.dateInput).eq(1).type('2022-01-01').blur();
        cy.get(datepickerObjects.addButton).click();
        // Verify error message for invalid date range
        cy.contains('End date cannot be before start date.').should('exist');
    });

    it('EMP_006	Add employment with same start and end date', () => {
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Google');
        cy.get(datepickerObjects.dateInput).eq(0).type('2022-01-01');
        cy.get(datepickerObjects.dateInput).eq(1).type('2022-01-01').blur();
        cy.get(datepickerObjects.addButton).click();
        // Verify the employment record is added
        cy.contains('Google').should('exist');
        cy.contains('2022-01-01').should('exist');
    });

    it('EMP_007	Open employment modal and cancel without saving', () => {
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Google');
        cy.get(datepickerObjects.dateInput).eq(0).type('2022-01-01');
        cy.get(datepickerObjects.dateInput).eq(1).type('2023-01-01').blur();
        cy.get('body').type('{esc}');
        // Verify no employment record is added
        cy.contains('Google').should('not.exist');
    });

    it('EMP_008	Delete an existing employment record', () => {
        // Add employment record first
        cy.contains('Add Employment').click();
        cy.get('input[type="text"]').type('Google');
        cy.get(datepickerObjects.dateInput).eq(0).type('2022-01-01');
        cy.get(datepickerObjects.dateInput).eq(1).type('2023-01-01').blur();
        cy.get(datepickerObjects.addButton).click();
        // Verify the employment record is added
        cy.contains('Google').should('exist');
        // Delete the employment record
        cy.get(datepickerObjects.deleteButton).click();
        // Verify the employment record is deleted
        cy.contains('Google').should('not.exist');
    });
});