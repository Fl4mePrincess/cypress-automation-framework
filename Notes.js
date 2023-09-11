// Don't forget to run the following code after running script for multiple cucumber html report:
// node cucumber-html-report.js
// this can also be added after scripts using && node cucumber-html-report.js

// # How to run specific tags:
// # npx cypress run -e TAGS='@login' --headed
// # npx cypress run -e TAGS='@login or @contact-us' -- headed
// # npx cypress run -e TAGS='(@login or @regresssion) and not @smoke' --headed
//use 'npm run' and script name to run custom scripts


// Hooks notes:
    // Can select more than one tag -

    // Before({tags:"@regression and @smoke"}, () => {
    // })

    // Before({tags:"@regression or @Smoke "}, () => {
    // })

//Page Objects
    //use 'super' to call methods
    //To inherit use: import Base_PO from "./Base_PO";
    //Always need to include "export default pageObjectName;"" at the end of page object files

//Selectors

    // CSS: button[id='sendMessageButton'] OR just #sendMessageButton
    // Xpath: //button[@id='sendMessageButton']

    //two forwardslashes checks whole DOM file
    //going down another level: //div[@class='traversal-buttons']/button

    //CSS Combinators
    //Descendant - ul li (unordered list, list tag)
    //Direct Descendant eg- div > input (input tags within div)
    //Adjacent sibling eg- div + image
    //Far sibling eg- div ~ p
    //Contains both classes -
        //.class1.class2
    //Id and class example: #contactForm .form-control

    //Attribute selectors
    //Exact elements =  (example [value='option-1'])
    //Ends in: $=       (example [value$='1'])
    //Begins with: ^=   (example [value^='opt'])
    //Contains: *=      (example [value*='tion'])

    //Pseudo classes
    //disabled              (example input[name='vegetable']:disabled)
    //enabled               (example input[name='vegetable']:enabled)
    //checked               (example [value*='option']:checked)    
    //nth-child(3)          (example li:nth-child(3)) <- selects all 3rd list items
    //nth-child(odd)        (example li:nth-child(odd)) <- selects all odd list items
    //nth-last-child(odd)   (example li:nth-last-child(1)) <- selects all last list items
    //nth-of-type(odd)      (example button:nth-of-type(odd)) <- selects all odd buttons
    //:first-child          (example [class*='btn']:first-child) <- selects all first button elements
    //:last-child           (example [class*='btn']:last-child) <- selects all first button elements

    //cy.get('#portfolioModal1 > .modal-dialog > .modal-content > .modal-body > .container > .row > .col-lg-8 > .btn')