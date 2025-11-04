import { tableObjects } from "../../pageObjects/objects";

describe('table test', () => {
    // beforeEach(() => {
    //    cy.visit(tableObjects.tablePageUrl);
    // });

    it('EMP_001	Add a new employee with valid data', () => {
        cy.visit(tableObjects.tablePageUrl);
        cy.get(tableObjects.addEmployee).click();
        cy.get(tableObjects.employeeName).type('John Doe');
        cy.get(tableObjects.employeePosition).type('QA');
        cy.get(tableObjects.employeeDepartment).type('Mobile');
        cy.get(tableObjects.employeeEmail).type('user@gmail.com');
        cy.get(tableObjects.employeeLocation).type('Pampanga');
        cy.get(tableObjects.saveButton).click();
        //Verify
        cy.contains('John Doe');
    });

});