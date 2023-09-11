import Base_PO from "./Base_PO";

class Selectors_PO {

    navigateTest() {
        cy.fixture("config.json").then((data) => {
          cy.visit(data.testURL);
        });
      }
}

export default Selectors_PO;