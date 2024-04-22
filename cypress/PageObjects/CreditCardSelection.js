class CardSelection{

    btnCreditCard ="#feedScrollBar > div.item-Payment-Card-List-main-container > div.card-list-main-container > div.MuiPaper-root.MuiCard-root.card-list-container.MuiPaper-elevation1.MuiPaper-rounded > div > div > div:nth-child(3)";

    btnNext6 = "#feedScrollBar > div.item-Payment-Card-List-main-container > div.card-list-main-container > div.card-list-button-container > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.ml-20.card-list-submit-button";
    btnAddNew = "#feedScrollBar > div.item-Payment-Card-List-main-container > div.card-list-main-container > div.MuiPaper-root.MuiCard-root.card-list-container.MuiPaper-elevation1.MuiPaper-rounded > div > div > div:nth-child(4) > div";
    
    clickCreditCard()  {
        cy.get(this.btnCreditCard).click();
       
    }
    clickNextButton6()  {
        cy.get(this.btnNext6).click();
    }

    clickAddNew()  {
        cy.get(this.btnAddNew).click();
    }

}
export default CardSelection;
