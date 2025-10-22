import { timepickerObjects } from "../../pageObjects/objects";

describe('Timepicker Tests', () => {
    // beforeEach(() => {
    //     cy.visit(timepickerObjects.timepickerPageUrl);
    // });

    it('SALON_001 - Book appointment within working hours' , () => {
        cy.visit(timepickerObjects.timepickerPageUrl);
        cy.get(timepickerObjects.timeInput).click().type('10:0AM').blur();
        cy.get(timepickerObjects.confirmButton).click();
        cy.get(timepickerObjects.resultMessage).should('contain.text', 'Appointment booked at 10:00 AM');
    });

});