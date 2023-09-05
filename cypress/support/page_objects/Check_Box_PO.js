import Base_PO from "./Base_PO";

class Check_Box_PO extends Base_PO{

    select_DropBoxItem(dropDownItem){
        cy.get("#dropdowm-menu-1").select(dropDownItem);
    };

}

export default Check_Box_PO;