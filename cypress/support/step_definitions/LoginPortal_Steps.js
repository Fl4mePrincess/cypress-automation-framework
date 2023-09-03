// <reference types="cypress" /> <- for cypress commands
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
//login stuff should be anonymous ({})
import Login_PO from "../page_objects/Login_PO";
let stub;
const loginPO = new Login_PO;

Given(`I navigate to the webdriveruniversity login page`, () =>{
  loginPO.navigateTo_Login_Page();
})

When(`I type a username {} and password {}`, (userName, password) => {
  loginPO.type_Username(userName);
  loginPO.type_Password(password);
});

When(`I click the login button`, () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  loginPO.click_Login();
});

Then(`I should be presented with a alert box which contains text {string}`,
  (alertText) => {
    expect(stub).to.have.been.calledWith(alertText);
  }
);
