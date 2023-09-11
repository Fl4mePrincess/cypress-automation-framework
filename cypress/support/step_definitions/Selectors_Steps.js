import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Selectors_PO from "../page_objects/Selectors_PO";

selectorsPO = new Selectors_PO();

Given("I navigate to the selectors webdriveruniversity page", () => {
  selectorsPO.navigateTest();
});

When("I select the first radio button", () => {
  cy.get(`input[name='vegetable']:nth-child(1)`).click();
});

Then("the radio button is selected", () => {
  cy.get(`input[name='vegetable']:nth-child(1)`).should("be.checked");
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
