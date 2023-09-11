import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Selectors_PO from "../page_objects/Selectors_PO";

selectorsPO = new Selectors_PO()

Given('I navigate to the selectors webdriveruniversity page', () => {
    selectorsPO.navigateTest();
});

When('I select the first radio button', () => {
    cy.get(`input[name='vegetable']:nth-child(1)`).click()
});

Then('the radio button is selected', () => {
    cy.get(`input[name='vegetable']:nth-child(1)`).should('be.checked')
})