import { timepickerObjects } from "../../pageObjects/objects";

describe('Timepicker Tests', () => {
    beforeEach(() => {
        cy.visit(timepickerObjects.timepickerPageUrl);
    });

    it('SALON_001 - Book appointment within working hours' , () => {
        cy.get(timepickerObjects.timeInput).click().type('10:00').blur();
        cy.get(timepickerObjects.confirmButton).click();
        cy.get(timepickerObjects.resultMessage).should('contain.text', 'Appointment successfully booked at 10:00');
    });

    it('SALON_002 - Book appointment before opening time', () => {
        cy.get(timepickerObjects.timeInput).click().type('08:45').blur();
        cy.get(timepickerObjects.confirmButton).click();
        cy.get(timepickerObjects.errorResultMessage).should('contain.text', 'Selected time 08:45 is outside of salon hours (09:00 to 18:00)');

    });

    it('SALON_003 - Book appointment after closing time', () => {
        cy.get(timepickerObjects.timeInput).click().type('18:30').blur();
        cy.get(timepickerObjects.confirmButton).click();
        cy.get(timepickerObjects.errorResultMessage).should('contain.text', 'Selected time 18:30 is outside of salon hours (09:00 to 18:00)');
    });

    it('SALON_004 - Book appointment at exact opening time', () => {
        cy.get(timepickerObjects.timeInput).click().type('09:00').blur();
        cy.get(timepickerObjects.confirmButton).click();
        cy.get(timepickerObjects.resultMessage).should('contain.text', 'Appointment successfully booked at 09:00');
    });

    it('SALON_005 - Book appointment at exact closing time', () => {
        cy.get(timepickerObjects.timeInput).click().type('18:00').blur();
        cy.get(timepickerObjects.confirmButton).click();
        cy.get(timepickerObjects.resultMessage).should('contain.text', 'Appointment successfully booked at 18:00');
    });

});