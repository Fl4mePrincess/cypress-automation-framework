import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When(`I select a check box`, () => {
  cy.get("#checkboxes > :nth-child(1) > input").click();
});

Then(`the check box is marked checked`, () => {
  cy.get("#checkboxes > :nth-child(1) > input").should("be.checked");
});

When(`I click a checkbox that is already checked`, () => {
  cy.get("#checkboxes > :nth-child(5) > input").click();
});

Then(`the check box is no longer checked`, () => {
    cy.get("#checkboxes > :nth-child(5) > input").should("not.be.checked"); 
})
