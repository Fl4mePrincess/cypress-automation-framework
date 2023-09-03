// <reference types="cypress" /> <- for cypress commands
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com/";

Before(() => {
    cy.log("Executing commands inside homepage steps.");
})

Given(`I navigate to the webdriveruniversity homepage`, () => {
    cy.visit(url);
    
})

When(`I click on the contact us button`, () => {
    cy.clickAndOpenLink_InSameTab("#contact-us");
})

When(`I click the login portal button`, () => {
    cy.clickAndOpenLink_InSameTab("#login-portal");
 })

 When(`I click the to do list button`, () => {
    cy.clickAndOpenLink_InSameTab("#to-do-list");
 })

