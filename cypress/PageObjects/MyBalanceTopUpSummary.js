class WalletSummary{

    btnNext6 = "#feedScrollBar > div.item-Payment-Card-List-main-container > div.card-list-main-container > div.MuiPaper-root.MuiCard-root.card-list-container.MuiPaper-elevation1.MuiPaper-rounded > div > div > div:nth-child(2)";
    
    clickNextButton6()  {
        cy.get(this.btnNext6).click();
    }

}
export default WalletSummary;