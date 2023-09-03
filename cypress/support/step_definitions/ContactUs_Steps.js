// <reference types="cypress" /> <- for cypress commands
import { When,Then } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_objects/Contact_Us_PO";

const contactUsPO = new Contact_Us_PO();

When(`I type a first name`, () => {
    contactUsPO.type_FirstName("John");
})

When(`I type a last name`, () => {
    contactUsPO.type_LastName("Smith");
})

When(`I enter an email address`, () => {
    contactUsPO.type_Email("js@mail.com");
})

When(`I type a comments`, () => {
    contactUsPO.type_Comment("Hello World");
})

When(`I click the submit button`, () => {
    contactUsPO.clickOn_Submit_Button();
})

Then(`I should be presented with a successful contact us submission message`, () => {
    //cy.get('h1').should('have.text', 'Thank You for your Message!');
    //Improvement after using POM:
    contactUsPO.validate_Submission_Header('Thank You for your Message!');
})

Then('I should be presented with an unsuccessful contact us submission message', () => {
    cy.get('body').contains('Error: Invalid email address');
})

When('I type a specific first name {string}', (firstName) => {
    contactUsPO.type_FirstName(firstName);
})

When('I type a specific last name {string}', (lastName) => {
    contactUsPO.type_LastName(lastName);
})

When('I type a specific email address {string}', (email) => {
    contactUsPO.type_Email(email);
})

When('I type a specific word {string} and a number of {int} within the comment input field', (word, number) => {
    contactUsPO.type_Comment(word + " " + number);
})

When('I type a first name {word} and a last name {string}', (firstName, lastName) => {
    contactUsPO.type_FirstName(firstName);
    contactUsPO.type_LastName(lastName);
})

When('I type an {string} and a comment {string}', (email, comment) => {
    contactUsPO.type_Email(email);
    contactUsPO.type_Comment(comment);
})

Then('I should be presented with header text {string}', (message) => {
    //cy.xpath("//h1 | //body").contains(message); //all logic
    contactUsPO.validate_Submission_Header(message);
})