class WalletTopUp{

    textWalletTopUpAmount ="#feedScrollBar > div.account-balance-top-up-main-container > div.MuiPaper-root.MuiCard-root.account-balance-top-up-container.MuiPaper-elevation1.MuiPaper-rounded > div > div.payWat-input.account-balance-top-up-input > div.MuiFormControl-root.MuiTextField-root.payWat-input--input";
    btnNext5 = "#feedScrollBar > div.account-balance-top-up-main-container > div.account-balance-top-up-button-container > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.account-balance-top-up-submit-button";
    
    setWalletTopUpAmount(walletamount){
        cy.get(this.textWalletTopUpAmount).type(walletamount);
    }
    clickNextButton5()  {
        cy.get(this.btnNext5).click();
    }

}
export default WalletTopUp;
