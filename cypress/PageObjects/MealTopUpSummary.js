class MealSummary{

    btnNext4 = "#feedScrollBar > div.meal-top-up-summary-main-container > div:nth-child(2) > div.meal-top-up-summary-button-section > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.meal-top-up-summary-button-section-next";
    
    clickNextButton4()  {
        cy.get(this.btnNext4).click();
    }

}
export default MealSummary;