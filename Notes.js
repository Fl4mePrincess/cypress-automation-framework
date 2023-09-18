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

    //XPaths
    //Absolute xpath - causes flakey tests, not recommended
        //example: /html/body/section/div/h2
    //Relative xpaths - recommended way
        //example: //h2[text()='Portfolio']
    //Descendant Selectors
        //h1: locates all elements with h1 tag
        //div//p: locates all p tags housed within a div
        //div//ul/li: locates all list elements housed with a ul tag that's housed within a div tag
        //tr//td: locates all td elements descended from tr tag
        //tr//*: Locates all tagged elements descended from tr tag

        //further examples that work on webdriveruniversity website
        // //div[@class='traversal-buttons']
        // //div[@class='traversal-buttons']/button
        // //div[@class='traversal-buttons']//input
    
    //XPaths attribute selectors (always need @ symbol for attributes)
        //*[@id='sendMessageButton'] <- locates all elements with that id
        //button[@id='sendMessageButton'] <- locates all button elements with that id
        //*[@class='form-control'] <- locates all elements which contain that class
        
        //input[@required='required'] <- locates input elements with an attribute of required that has a value of required
        //input[@required='required'][@id='name'] <- as above but must have id attribute with specified value
        //*[@required] <- locates all elements that contains that attribute
        //a[starts-with(@href, 'http://www.webdriver')] <- locates all a tagged elements with a href starting with the specified text
        //a[contains(@href,'university.com')] <- locates all a tagged elements that contain specified text
            //Can be used to find elements with multiple classes: //h2[contains(@class, 'page-section-sub-heading text-center')]
    //Xpath order selectors
        //ul/li[1] <- locates all first list item elements
        //ul/li[last()] <- locates all of the last list elements
        //div[@class="progress"][1] <- locates all div tags with progress class and index number of 1
    //Upath sibling selectors
        //header/following-sibling::section <- locates all following siblings to the header elements    
        //header/following-sibling::section[1] <- locates first section elements that are following siblings to the header elements    
        //header/following-sibling::section[@id='portfolio'] <- locates all section elements which are following siblings to the header elements with the specified id attribute value                    
    //Other XPath selector things
        //section[not(@id='portfolio')] <- locates all section elements except ones which have the specified id
        //a[text()="Contact"] <- Locates all a tagged elements which have specified text
        //a[contains(text(),"Play")] <- Locates all tagged elements which contain the specified text
        //div[@aria-valuenow >74.00] <- Locates all div elements where the aria-valuenow attribute value is greater than 74.00
        //ul[*] <- Locates all ul tagged elements which have children
        //ul[li] <- Locates all ul tagged elements with li tagged children
        //*[href or @aria-valuemax] <- locates all elements which have an attribute of href OR aria-valuemax
        //*[@aria-valuemax and @class] <- locates all elements with both specified attributes
        //a | //td <- Locates all a OR td tagged elements
    //Xpath Indexing
        //li[position()=2] <- locates all li tagged elements at position 2
        //li[position()>2] <- locates all li tagged elements at a position greater than 2
        //li[2] <- Locates all li tagged elements with a position of 2
    //Real World Examples
        // selecting the Playground button on the nav
            //a[@href='#playground']
            //or
            //a[text()='Playground']
        //
