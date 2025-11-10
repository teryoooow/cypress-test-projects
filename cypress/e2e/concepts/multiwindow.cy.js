import { it } from "mocha";
import { multiwindowObjects } from "../../pageObjects/objects";

describe('multiwindow tests', () => {
    beforeEach(() => {
        cy.visit(multiwindowObjects.multiwindowPageUrl);
    });

    it('QUICKLINKS_001	Open link in new tab', () => {
        cy.get(multiwindowObjects.basicButton).click();
    });

    it('QUICKLINKS_002	Open link in new window', () => {
        cy.get(multiwindowObjects.basicButton).click();
    });


});