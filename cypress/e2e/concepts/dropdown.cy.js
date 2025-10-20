import { it } from 'mocha';
import { dropdownObjects } from '../../pageObjects/objects';

describe('Dropdown Tests', () => {
    it('CURR_001 - Select a valid country from the dropdown', () => {
        cy.visit(dropdownObjects.dropdownPageUrl);
        cy.get(dropdownObjects.selectCountryDropdown).click();
        cy.get('ul[role="listbox"] > li').contains('India').click();
        cy.get(dropdownObjects.currency).should('contain.text', 'INR');
    });

    it('CURR_002 - Select another valid country from the dropdown', () => {
        cy.visit(dropdownObjects.dropdownPageUrl);
        cy.get(dropdownObjects.selectCountryDropdown).click();
        cy.get('ul[role="listbox"] > li').contains('United States').click();
        cy.get(dropdownObjects.currency).should('contain.text', 'USD');
    });

});