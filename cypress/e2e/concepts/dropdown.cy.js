import { dropdownObjects } from '../../pageObjects/objects';

beforeEach(() => {
    cy.visit(dropdownObjects.dropdownPageUrl);
});

describe('Dropdown Tests', () => {
    it('CURR_001 - Select a valid country from the dropdown', () => {
        cy.get(dropdownObjects.selectCountryDropdown).click();
        cy.get('ul[role="listbox"] > li').contains('India').click();
        cy.get(dropdownObjects.currency).should('contain.text', 'INR');
    });

    it('CURR_002 - Clear the selected country', () => {
        cy.get(dropdownObjects.selectCountryDropdown).click();
        cy.get('ul[role="listbox"] > li').contains('Japan').click();
        cy.get(dropdownObjects.clearDropdownButton).click();
        cy.get(dropdownObjects.currency).should('contain.text', '---');
    });

    it('CURR_003 - Search for a country in the dropdown', () => {
        cy.get(dropdownObjects.selectCountryDropdown).click();
        cy.get('input[role="combobox"]').type('Can');
        cy.get('ul[role="listbox"] > li').should('have.length.greaterThan', 0);
        cy.get('ul[role="listbox"] > li').contains('Canada').click();
        cy.get(dropdownObjects.currency).should('contain.text', 'CAD');
    });

    it('CURR_004 - Select a country not present in the list', () => {
        cy.get(dropdownObjects.selectCountryDropdown).click();
        cy.get('input[role="combobox"]').type('Wakanda');
        cy.get('ul[role="listbox"] > li').should('have.length', 0);
        cy.get(dropdownObjects.currency).should('contain.text', '---');
    });

    it('CURR_005 - Load component with no country selected initially', () => {
        cy.get(dropdownObjects.currency).should('contain.text', '---');
    });

    it('CURR_008 - Test special characters in search', () => {
        cy.get(dropdownObjects.selectCountryDropdown).click();
        cy.get('input[role="combobox"]').type('@#$%');
        cy.get('ul[role="listbox"] > li').should('have.length', 0);
        cy.get(dropdownObjects.currency).should('contain.text', '---');
    });

});