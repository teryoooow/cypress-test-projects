import { multiwindowObjects } from "../../pageObjects/objects";

describe('multiwindow tests', () => {
    beforeEach(() => {
        cy.visit(multiwindowObjects.multiwindowPageUrl);
    });

    it('QUICKLINKS_001	Open link in new tab', () => {
        cy.visit(multiwindowObjects.multiwindowPageUrl);
        cy.get(multiwindowObjects.basicButton).click();
    });
});