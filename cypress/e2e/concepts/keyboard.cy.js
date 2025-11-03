import { keyboardObjects } from "../../pageObjects/objects";

describe ('keyboard events test', () => {
    beforeEach (() => {
        cy.visit(keyboardObjects.keyboardPageUrl);
    });

    it('CHAT_001	Send a normal text message', () => {
        cy.get(keyboardObjects.inputField).type('Hello Team!');
        cy.get(keyboardObjects.submitButton).click();
        cy.contains('Hello Team!');
    });

    it('CHAT_002	Send a message with a clickable link', () => {
        cy.get(keyboardObjects.inputField).type('Check this https://example.com');
        cy.get(keyboardObjects.submitButton).click();
        cy.get(keyboardObjects.submittedText).contains('Check this https://example.com');
        cy.get(keyboardObjects.textLink).should('have.attr', 'target', '_blank');
    });

    it('CHAT_003	Ctrl+Click to preview a link before sending', () => {
        cy.get(keyboardObjects.inputField).type('Visit https://openai.com');
        cy.get(keyboardObjects.textPreview).contains('https://openai.com').click({ ctrlKey: true });
        cy.get(keyboardObjects.textLinkPreview).should('have.attr', 'target', '_blank');
    });

    it('CHAT_004	Click link without Ctrl in preview', () => {
        cy.get(keyboardObjects.inputField).type('Go to https://openai.com');
        cy.get(keyboardObjects.textPreview).contains('https://openai.com').click();
    });

    it('CHAT_006	Send message using Enter key', () => {
        cy.get(keyboardObjects.inputField).type('Hello via Enter{enter}');
        cy.get(keyboardObjects.submittedText).contains('Hello via Enter');
    });

});