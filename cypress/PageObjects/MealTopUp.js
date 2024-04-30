class MealTopUp {

    textTopUpAmount = "#feedScrollBar > div.account-balance-top-up-main-container > div.MuiPaper-root.MuiCard-root.account-balance-top-up-container.MuiPaper-elevation1.MuiPaper-rounded > div > div > div.MuiFormControl-root.MuiTextField-root.payWat-input--input > div > input";
    btnNext3 = "#feedScrollBar > div.account-balance-top-up-main-container > div.account-balance-top-up-button-container > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.account-balance-top-up-submit-button";
    textTopUpStudent = "#feedScrollBar > div.account-balance-top-up-main-container > div.MuiPaper-root.MuiCard-root.account-balance-top-up-container.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(3) > div.MuiFormControl-root.MuiTextField-root.payWat-input--input > div";
    textTopUpMyMeal = "#feedScrollBar > div.account-balance-top-up-main-container > div.MuiPaper-root.MuiCard-root.account-balance-top-up-container.MuiPaper-elevation1.MuiPaper-rounded > div > div:nth-child(1) > div.MuiFormControl-root.MuiTextField-root.payWat-input--input > div > input";

    setTopUpAmount(amount) {
        cy.get(this.textTopUpAmount).type(amount);
        
    }
    setTopUpStudent(amount) {
        cy.get(this.textTopUpStudent).type(amount);
        
    }
    setTopUpMyMeal(amountMyMeal) {
        cy.get(this.textTopUpMyMeal).type(amountMyMeal);
        
    }
    clickNextButton3() {
        cy.get(this.btnNext3).click();
    }

}
export default MealTopUp;


