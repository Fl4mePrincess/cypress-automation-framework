import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
    navigateToHomepage() {
        super.navigate("");
    }

    clickOn_ContacUs_Button() {
        cy.clickAndOpenLink_InSameTab("#contact-us");
    }

    clickOn_Login_Button() {
        cy.clickAndOpenLink_InSameTab("#login-portal");
    }
}

export default Homepage_PO;