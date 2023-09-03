// Don't forget to run the following code after running script for
// multiple cucumber html report: node cucumber-html-report.js
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