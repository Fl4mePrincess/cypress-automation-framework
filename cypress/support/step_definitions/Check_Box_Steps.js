import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Check_Box_PO from "../page_objects/Check_Box_PO";

const checkBoxPO = new Check_Box_PO();

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
});

When(`I click the drop down list option`, () => {
  cy.get("#dropdowm-menu-1").select("SQL");
});

//Attempting to cycle through drop down options - not working
// When(`I click the drop down list option {string}`, (dropDownItem) => {
//     checkBoxPO.Select_DropDownItem(dropDownItem);
//   });

Then(`the selected drop down list item is displayed in the box`, () => {
  cy.get("#dropdowm-menu-1").should("have.value", "sql");
});
