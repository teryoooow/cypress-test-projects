

describe('Button Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.cnarios.com/concepts/button#try-it-yourself');
    });

     it('BUTTON_001 - Tooltip visibility on hover', () => {
        cy.get('button:enabled').contains('Follow').trigger('mouseover');
        cy.get('.MuiTooltip-tooltip').should('be.visible').contains('Follow');
    });   

    it('BUTTON_002 - Click Follow button when enabled', () => {
        cy.get('button:enabled').contains('Follow').should('be.visible').click();
        cy.get('button:enabled').contains('Following').should('be.visible');
        cy.get('button:enabled').find('svg').should('have.class', 'MuiSvgIcon-root MuiSvgIcon-fontSizeMedium done-icon css-q7mezt');
    });

    it('BUTTON_003 - Follow button shows Processing.. text', () => {
        cy.get('button:enabled').contains('Follow').click().contains('Processing...');
        cy.wait(5000); // Wait for the button to change state
        cy.get('button:enabled').contains('Following').should('be.visible');
    });

    it('BUTTON_004 - Click Unfollow toggle back', () => {
        cy.get('button:enabled').contains('Follow').click();
        cy.wait(5000); // Wait for the button to change state
        cy.get('button:enabled').contains('Following').should('be.visible').click();
        cy.get('button:enabled').contains('Follow').should('be.visible');
    });

    it('BUTTON_005 - Remove a suggestion card', () => {
        cy.get('.MuiTypography-root.MuiTypography-subtitle1.css-3knznt').contains('Unknown').should('be.visible');
        cy.get('[aria-label="Remove"]').first().click();
        cy.get('.MuiTypography-root.MuiTypography-subtitle1.css-3knznt').contains('Unknown').should('not.exist');
    });

});