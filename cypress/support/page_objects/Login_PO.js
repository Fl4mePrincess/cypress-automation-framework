import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
  navigateTo_Login_Page() {
    super.navigate("/Login-Portal/index.html");
  }

  type_Username(userName) {
    cy.get("#text").type(userName);
  }
  type_Password(password) {
    cy.get("#password").type(password);
  }
  click_Login() {
    cy.get("#login-button").click();
  }
}

export default Login_PO;
