//House common things

class Base_PO {
  //can use:
  //baseURL = "http://www.webdriveruniversity.com/";
  //or a method:
  navigate(path) {
    cy.fixture("config.json").then((data) => {
      cy.visit(data.baseURL + path);
    });
  }

  getPageTitle() {
    return cy.title();
  }

}
export default Base_PO;
