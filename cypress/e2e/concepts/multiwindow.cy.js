import { multiwindowObjects } from "../../pageObjects/objects";

describe('multiwindow tests', () => {
    beforeEach(() => {
        cy.visit(multiwindowObjects.multiwindowPageUrl);
    });

    it('QUICKLINKS_001    Open link in new tab', () => {
        cy.get(multiwindowObjects.learnAboutButtonLink).find('a').invoke('attr', 'href').then(href => {
            cy.visit(href);
        });
        cy.url().should('include', '/concepts/button');
        // Assuming the button page has some unique content to verify
        cy.contains('Follow').should('be.visible'); 
    });

    // it('QUICKLINKS_002    Open link in new window', () => {
    //     cy.window().then((win) => {
    //         cy.stub(win, 'open').as('windowOpen');
    //     });
    //     cy.get(multiwindowObjects.learnAboutTimePickerLink).find('a').click();
    //     cy.get('@windowOpen').should('be.calledWith', '/concepts/timepicker', '_blank', 'width=800,height=600');
    // });

    it('QUICKLINKS_003 Broken or missing navigation', () => {
        cy.visit('/concepts/xyz', { failOnStatusCode: false });
        cy.get('body').should('contain', '404 - Page Not Found');
    });
});