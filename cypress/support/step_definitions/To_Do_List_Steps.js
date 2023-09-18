import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When(`I select the first list item`, () => {
  cy.get(`li:nth-child(1)`).click();
});

Then(`the first item is marked as completed`, () => {
  cy.get(`li:nth-child(1)`).should("have.class", "completed");
});

When(`I select the plus icon to add a new list item`, () => {
  cy.get(`#plus-icon`).click();
});

When(`I type a new list item into the text field {string} and press enter`, (listItem) => {
  cy.get(`input[type='text']`).type(listItem)
  .type('{enter}');
});

Then(`the new list item is added to the To-Do list`, () => {
    cy.get(`li:nth-child(4)`).should('contain', 'Feed the dragons');
});

When(`I click the trash can icon next to a list item`, () => {
  cy.get(`li:nth-child(2) [class='fa fa-trash']`).click();
});

Then(`the list item is removed`, () => {
  cy.get('li:nth-child(2)').should('contain', ' Practice magic');
});
