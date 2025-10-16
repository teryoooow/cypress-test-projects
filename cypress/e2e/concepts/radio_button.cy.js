import { radioButtonObjects } from "../../pageObjects/objects";

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
        cy.contains('Submit').click();
        // Verify success message
        cy.get(radioButtonObjects.resultMessage).should('contain.text', 'Your Score: 4 / 4');
        cy.get(radioButtonObjects.resultMessage).should('contain.text', 'Pass 🎉');

    });

    it('QUIZ_002 - Submit quiz with all incorrect answers', () => {
        // Select incorrect answers
        cy.get(radioButtonObjects.xAnswer1).check(); // Incorrect for Q1
        cy.get(radioButtonObjects.xAnswer2).check(); // Incorrect for Q2
        cy.get(radioButtonObjects.xAnswer3).check(); // Incorrect for Q3
        cy.get(radioButtonObjects.xAnswer4).check(); // Incorrect for Q4
        // Submit the quiz
        cy.contains('Submit').click();
        // Verify failure message
        cy.get(radioButtonObjects.resultMessage).should('contain.text', 'Your Score: 0 / 4');
        cy.get(radioButtonObjects.resultMessage).should('contain.text', 'Fail ❌');
    });

    it('QUIZ_003 - Submit quiz with partial correct answers', () => {
        // Select a mix of correct and incorrect answers
        cy.get(radioButtonObjects.answer1).check(); // Correct for Q1
        cy.get(radioButtonObjects.xAnswer2).check(); // Incorrect for Q2
        cy.get(radioButtonObjects.answer3).check(); // Correct for Q3
        cy.get(radioButtonObjects.answer4).check(); //Correct for Q4
        // Submit the quiz
        cy.contains('Submit').click();
        // Verify partial score message
        cy.get(radioButtonObjects.resultMessage).should('contain.text', 'Your Score: 3 / 4');
        cy.get(radioButtonObjects.resultMessage).should('contain.text', 'Pass 🎉');
    });

    it('QUIZ_004 - Submit without answering any questions', () => {
        // Attempt to submit the quiz
        cy.contains('Submit').click();
                // Verify failure message
        cy.get(radioButtonObjects.resultMessage).should('contain.text', 'Your Score: 0 / 4');
        cy.get(radioButtonObjects.resultMessage).should('contain.text', 'Fail ❌');
    });   


});