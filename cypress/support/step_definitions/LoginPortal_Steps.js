// <reference types="cypress" /> <- for cypress commands
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
//login stuff should be anonymous ({})

let stub;

When(`I type a username {} and password {}`, (userName, password) => {
  cy.get("#text").type(userName);
  cy.get("#password").type(password);
});

When(`I click the login button`, () => {
  stub = cy.stub();
  cy.on('window:alert', stub);
  cy.get("#login-button").click();
});

Then(`I should be presented with a alert box which contains text {string}`, (alertText) => {
    expect(stub).to.have.been.calledWith(alertText);
});
