import { iframeObjects } from "../../pageObjects/objects";
const paymentInfo = Cypress.env('payment_info');

describe('Iframe Tests', () => {
    beforeEach(() => {
        cy.visit(iframeObjects.iframePageUrl);
    });

    it('IFRAME_002 - Show validation error for empty fields' , () => {
        cy.get(iframeObjects.iframeSelector).then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find(iframeObjects.submitButton).click();
            cy.wrap($body).find(iframeObjects.cardNumberErrorMessage).should('contain.text', 'Card number must be 16 digits.');
            cy.wrap($body).find(iframeObjects.expiryErrorMessage).should('contain.text', 'Expiry must be in MM/YY format.');
            cy.wrap($body).find(iframeObjects.cvvErrorMessage).should('contain.text', 'CVV must be 3 digits.');
        });
    });

    it('IFRAME_003 - Validate card number format' , () => {
        cy.get(iframeObjects.iframeSelector).then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find(iframeObjects.cardNumber).type(paymentInfo.invalid_card_number);
            cy.wrap($body).find(iframeObjects.expiry).type(paymentInfo.expiry_date);
            cy.wrap($body).find(iframeObjects.cvv).type(paymentInfo.cvv);
            cy.wrap($body).find(iframeObjects.submitButton).click();
            cy.wrap($body).find(iframeObjects.cardNumberErrorMessage).should('contain.text', 'Card number must be 16 digits.');
        });
    });

    it('IFRAME_004 - Validate expiry format' , () => {
        cy.get(iframeObjects.iframeSelector).then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find(iframeObjects.cardNumber).type(paymentInfo.card_number);
            cy.wrap($body).find(iframeObjects.expiry).type(paymentInfo.invalid_expiry_date);
            cy.wrap($body).find(iframeObjects.cvv).type(paymentInfo.cvv);
            cy.wrap($body).find(iframeObjects.submitButton).click();
            cy.wrap($body).find(iframeObjects.expiryErrorMessage).should('contain.text', 'Expiry must be in MM/YY format.');
        });
    });

    it('IFRAME_005 - Validate CVV format' , () => {
        cy.get(iframeObjects.iframeSelector).then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find(iframeObjects.cardNumber).type(paymentInfo.card_number);
            cy.wrap($body).find(iframeObjects.expiry).type(paymentInfo.expiry_date);
            cy.wrap($body).find(iframeObjects.cvv).type(paymentInfo.invalid_cvv);
            cy.wrap($body).find(iframeObjects.submitButton).click();
            cy.wrap($body).find(iframeObjects.cvvErrorMessage).should('contain.text', 'CVV must be 3 digits.');
        });
    });

    it('IFRAME_006 - Successful payment data submission' , () => {
        cy.get(iframeObjects.iframeSelector).then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find(iframeObjects.cardNumber).type(paymentInfo.card_number);
            cy.wrap($body).find(iframeObjects.expiry).type(paymentInfo.expiry_date);
            cy.wrap($body).find(iframeObjects.cvv).type(paymentInfo.cvv);
            cy.wrap($body).find(iframeObjects.submitButton).click();
        });
        cy.get(iframeObjects.successMessage).should('contain.text', 'Payment Successful');
    });

    it('IFRAME_007	Close the success modal after payment' , () => {
        cy.get(iframeObjects.iframeSelector).then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find(iframeObjects.cardNumber).type(paymentInfo.card_number);
            cy.wrap($body).find(iframeObjects.expiry).type(paymentInfo.expiry_date);
            cy.wrap($body).find(iframeObjects.cvv).type(paymentInfo.cvv);
            cy.wrap($body).find(iframeObjects.submitButton).click();
        });
            cy.get(iframeObjects.successMessage).should('contain.text', 'Payment Successful');
            cy.get(iframeObjects.closeButton).click();
            cy.get(iframeObjects.successMessage).should('not.exist');
    });

});