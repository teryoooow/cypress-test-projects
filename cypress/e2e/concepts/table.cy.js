import { tableObjects } from "../../pageObjects/objects";

describe('table test', () => {
    beforeEach(() => {
       cy.visit(tableObjects.tablePageUrl);
    });

    it('EMP_001	Add a new employee with valid data', () => {
        cy.get(tableObjects.addEmployee).click();
        cy.get(tableObjects.employeeName).type('John Doe');
        cy.get(tableObjects.employeePosition).type('QA');
        cy.get(tableObjects.employeeDepartment).type('Mobile');
        cy.get(tableObjects.employeeEmail).type('user@gmail.com');
        cy.get(tableObjects.employeeLocation).type('Pampanga');
        cy.get(tableObjects.saveButton).click();
        //Verify
        cy.get(tableObjects.table).contains('John Doe');
    });

    it('EMP_002	Try to add employee with missing fields', () => {
        cy.get(tableObjects.addEmployee).click();
        cy.get(tableObjects.saveButton).click();
        //verify
        cy.get(tableObjects.employeeForm).should('exist');
    });

    it('EMP_003	Edit existing employee details', () => {
        cy.get(tableObjects.editButton).click();
        cy.get(tableObjects.employeeDepartment).clear().type('Mobile');
        cy.get(tableObjects.employeeEmail).clear().type('sarmiento@gmail.com');
        cy.get(tableObjects.saveButton).click();
        //Verify
        cy.get(tableObjects.table).contains('sarmiento@gmail.com');
    })

    it('EMP_004	Delete an employee from the table', () => {
        cy.get(tableObjects.deleteButton).click();
        //Verify
        cy.get(tableObjects.table).should('not.contain', 'Alice Johnson');
    });

    // it('EMP_005	Sort employees by Position column', () => {
    //     cy.get(tableObjects.positionColumn).click();
    //     cy.expect(tableObjects.positionColumn).to.deep.equal(sorted);


    // });
    
    it('EMP_005 Sort employees by Position column', () => {
       // Step 1: Click the Position column header to sort
       cy.get(tableObjects.positionColumn).click();

       // Step 2: Get all Position cell values
       cy.get('table tbody tr td:nth-child(2)') // adjust nth-child to match the "Position" column
        .then(($cells) => {
        const positions = [...$cells].map(cell => cell.innerText.trim());

      // Step 3: Make a sorted copy
        const sorted = [...positions].sort((a, b) => a.localeCompare(b));

      // Step 4: Verify the actual order matches the sorted one
        expect(positions).to.deep.equal(sorted);
    });
});

     it('EMP_006	Search employees by name', () => {
        cy.get(tableObjects.tableSearch).type('Alice');
        // Verify only Alice displays
        cy.get(tableObjects.table).should('not.contain', 'George');
     });

});