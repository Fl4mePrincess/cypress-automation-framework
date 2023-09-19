import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Selectors_PO from "../page_objects/Selectors_PO";

selectorsPO = new Selectors_PO();

Given("I navigate to the selectors webdriveruniversity page", () => {
  selectorsPO.navigateTest();
});

When("I select the first radio button", () => {
  cy.get(`input[name='vegetable']:nth-child(1)`).should('be.visible')
  cy.get(`input[name='vegetable']:nth-child(1)`).check();
});

Then("the radio button is selected", () => {
  cy.get(`input[name='vegetable']:nth-child(1)`).should("be.checked")
  cy.get(`input[name='vegetable']:nth-child(3)`).should("not.be.checked");
  cy.get(`input[name='vegetable']:nth-child(5)`).should("not.be.checked");
});

When(`I click the WebIO image`, () => [selectorsPO.clickWebIo()]);

Then(`the webIO pop up is displayed`, () => [
  cy.get("#portfolioModal1 .modal-body").should("be.visible"),
]);

When("I select each radio button", () => {
  cy.get(`[type*='radio'][name='color']`).click({ multiple: true });
});

Then("each radio button is selected", () => {
  cy.get('[value="purple"]').should("be.checked");
});

When(`I select the first checkbox option`, () => {
  cy.get(`input[type="checkbox"]`).first().should('be.visible')
  cy.get(`input[type="checkbox"]`).first().check();
});

Then(`the first checkbox is checked`, () => {
  cy.get(`input[type="checkbox"]`).first().should(`be.checked`);

});

When(`I uncheck a selected checkbox`, () =>{
  cy.get(`input[type="checkbox"][value='option-3']`).should('be.visible')
  cy.get(`input[type="checkbox"][value='option-3']`).should('be.checked')
  cy.get(`input[type="checkbox"][value='option-3']`).uncheck();
});

Then(`the check box is unchecked`, () => {
  cy.get(`input[type="checkbox"][value='option-3']`).should('not.be.checked');
});

When(`I select all the checkboxes`, () => {
cy.get(`input[type="checkbox"][value*='option']`).check();
});

When(`I unselect all the checkboxes`, () => {
  cy.get(`input[type="checkbox"][value*='option']`).should('be.checked');
  cy.get(`input[type="checkbox"][value*='option']`).uncheck();
});

Then(`all the checkboxes are unchecked`, () => {
  cy.get(`input[type="checkbox"][value*='option']`).should('not.be.checked');
});

When(`I select a specific option from the fruits drop down menu`, () => {
  cy.get(`#fruit-selects`).select("Pear");
});

Then(`the selection appears in the drop down box`, () => {
cy.get(`#fruit-selects`).should('have.value', 'pear');
});