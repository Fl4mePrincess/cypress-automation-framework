import { Then, When } from "@badeball/cypress-cucumber-preprocessor";



When(`I select a check box`, () => {
    cy.get('#checkboxes > :nth-child(1) > input').click();
});

Then(`the check box is selected`, () => {

});