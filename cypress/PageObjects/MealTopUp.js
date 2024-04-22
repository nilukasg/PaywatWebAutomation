class MealTopUp {

    textTopUpAmount = "#feedScrollBar > div.account-balance-top-up-main-container > div.MuiPaper-root.MuiCard-root.account-balance-top-up-container.MuiPaper-elevation1.MuiPaper-rounded > div > div > div.MuiFormControl-root.MuiTextField-root.payWat-input--input > div > input";
    btnNext3 = "#feedScrollBar > div.account-balance-top-up-main-container > div.account-balance-top-up-button-container > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.account-balance-top-up-submit-button";

    setTopUpAmount(amount) {
        cy.get(this.textTopUpAmount).type(amount);
        
    }
    clickNextButton3() {
        cy.get(this.btnNext3).click();
    }

}
export default MealTopUp;


