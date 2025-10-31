import { keyboardObjects } from "../../pageObjects/objects";

describe ('keyboard events test', () => {
    beforeEach (() => {
        cy.visit(keyboardObjects.keyboardPageUrl);
    });

    it('CHAT_001	Send a normal text message')
});