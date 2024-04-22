class SelectItem{

    lblMsg = ".profile-name";
    txtTitle = "//div[contains(text(),'Select Item')]";
    btnSelectAll = "#feedScrollBar > div.item-list-main-container > div:nth-child(2) > div.item-list-student-main-container > div.MuiPaper-root.MuiCard-root.item-list-container.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(3) > span:nth-child(1) > span > span.MuiIconButton-label";
    //btnSelectAll = "input.jss229";
    btnNext = "#feedScrollBar > div.item-list-main-container > div:nth-child(2) > div.item-list-button-section > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.item-list-button-section-next > span.MuiButton-label";
    txtTitleSummary="//div[contains(text(),'Item Summary')]";

    verifySelectItemsUI(){
        cy.get(this.txtTitle).should("have.text","Select Item");
    }
    clickSelectAll()  {
        cy.get(this.btnSelectAll).click();
    }
    clickNextButton()  {
        cy.get(this.btnNext).click();
    }
    verifyNavigation()  {
        cy.get(this.txtTitleSummary).should("have.text","Item Summary");
    }

}
export default SelectItem;