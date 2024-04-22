class ItemSummary{

    btnNext2 = "#feedScrollBar > div.item-list-summary-main-container > div:nth-child(2) > div.item-list-summary-button-section > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.item-list-summary-next";
    
    clickNextButton2()  {
        cy.get(this.btnNext2).click();
    }

}
export default ItemSummary;