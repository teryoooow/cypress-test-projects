import { radioButtonObjects } from "../../pageObjects/objects";
/// <reference types="cypress" />

describe('Radio Button Tests', () => {
    beforeEach(() => {
        cy.visit(radioButtonObjects.radioButtonPageUrl);
    });

    it('QUIZ_001 - Submit quiz with all correct answers' , () => {
        // Select correct answers
        cy.get(radioButtonObjects.answer1).check();
        cy.get(radioButtonObjects.answer2).check();
        cy.get(radioButtonObjects.answer3).check();
        cy.get(radioButtonObjects.answer4).check();
        // Submit the quiz
        cy.get(radioButtonObjects.submitButton).click();
        // Verify success message
        cy.get(radioButtonObjects.resultMessage).should('contain.text', 'Your Score: 4 / 4');

    });
});