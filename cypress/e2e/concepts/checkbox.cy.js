import { checkboxObjects } from '../../pageObjects/objects';

describe('Checkbox Tests', () => {
    // beforeEach(() => {
    //     cy.visit(checkboxObjects.checkboxPageUrl);
    // });

    it('NEWS_001 - Select multiple categories and view filtered news', () => {
        cy.visit(checkboxObjects.checkboxPageUrl);
        cy.contains(checkboxObjects.setPreferencesButton).click();
        cy.get(checkboxObjects.sportsCheckbox).click();
        cy.get(checkboxObjects.healthCheckbox).click();
        cy.get(checkboxObjects.doneButton).click();
        cy.get(checkboxObjects.newsFeed).invoke('text').should('include', 'Category: Technology').and('include', 'Category: Health');
    });

    it('NEWS_002 - Unselect all categories', () => {
        cy.visit(checkboxObjects.checkboxPageUrl);
        cy.contains(checkboxObjects.setPreferencesButton).click();
        cy.get('input[type="checkbox"]:checked').each(($el) => {
        cy.wrap($el).click({ force: true }); // uncheck them
        });
        cy.get(checkboxObjects.doneButton).click();
        cy.get(checkboxObjects.newsFeed).invoke('text').should('include', 'No news to display. Select categories using "Set Preferences".');
    });

    it('NEWS_003 - Open and close preference dialog without changes', () => {
        cy.visit(checkboxObjects.checkboxPageUrl);
        cy.get(checkboxObjects.newsFeed).invoke('text').should('include', 'Category: Technology').and('include', 'Category: Sports');
        cy.contains(checkboxObjects.setPreferencesButton).click();
        cy.get(checkboxObjects.doneButton).click();
        cy.get(checkboxObjects.newsFeed).invoke('text').should('include', 'Category: Technology').and('include', 'Category: Sports');
    });

});