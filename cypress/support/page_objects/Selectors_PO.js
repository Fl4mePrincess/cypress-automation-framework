import Base_PO from "./Base_PO";

class Selectors_PO {
  navigateTest() {
    cy.fixture("config.json").then((data) => {
      cy.visit(data.testURL);
    });
  }

  elements = {
    webIOButton: () => cy.get(`[data-target='#portfolioModal1']`),
    cypressButton: () => cy.get(`#portfolioModal2`),
    seleniumButton: () => cy.get(`#portfolioModal3`),
  };

  clickWebIo() {
    this.elements.webIOButton().click();
  }

  clickCypress() {
    this.elements.cypressButton().click();
  }

  clickSelenium() {
    this.elements.seleniumButton().click();
  }
}

export default Selectors_PO;
