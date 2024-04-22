class SelectItem{

    lblMsg = ".profile-name";
    txtTitle = "//div[contains(text(),'Select Item')]";
    btnSelectAll = "#feedScrollBar > div.item-list-main-container > div:nth-child(2) > div.item-list-student-main-container > div.MuiPaper-root.MuiCard-root.item-list-container.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(3) > span:nth-child(1) > span > span.MuiIconButton-label";
    //btnSelectAll = "input.jss229";
    btnNext = "#feedScrollBar > div.item-list-main-container > div:nth-child(2) > div.item-list-button-section > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.item-list-button-section-next > span.MuiButton-label";
    txtTitleSummary="//div[contains(text(),'Item Summary')]";
    btnNext2 = "#feedScrollBar > div.item-list-summary-main-container > div:nth-child(2) > div.item-list-summary-button-section > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.item-list-summary-next";
    btnSkip="#feedScrollBar > div.item-list-main-container > div:nth-child(2) > div.item-list-button-section > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.item-list-button-section-skip > span.MuiButton-label"

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
    clickNextButton2()  {
        cy.get(this.btnNext2).click();
    }
    clickSkipButton()  {
        cy.get(this.btnSkip).click();
    }

}
export default SelectItem;