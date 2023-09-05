// <reference types="cypress" /> <- for cypress commands
import { Given, When, Before, Then } from "@badeball/cypress-cucumber-preprocessor";

import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

//const basePage = new Base_PO();
const homePage = new Homepage_PO();

elements = {
  checkboxHeading: () => cy.get('h1')
};

Before(() => {
  cy.log("Executing commands inside homepage steps.");
});

Given(`I navigate to the webdriveruniversity homepage`, () => {
  //cy.visit(url);
  //basePage.navigate("");
  homePage.navigate("");
});

When(`I click on the contact us button`, () => {
  homePage.clickOn_ContacUs_Button();
});

When(`I click the login portal button`, () => {
  homePage.clickOn_Login_Button();
});

When(`I click the to do list button`, () => {
  cy.clickAndOpenLink_InSameTab("#to-do-list");
});

When(`I click the checkboxes button`, () => {
  homePage.clickOn_Checbox_Button();
});

Then(`the checkboxes page is displayed`, () =>{
  cy.get('h1').should('have.text', `Dropdown Menu(s), Checkboxe(s) & Radio Button(s)`);
});
