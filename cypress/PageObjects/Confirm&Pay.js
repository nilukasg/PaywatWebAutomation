class Pay{

    textCVV ="#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.payment-confirmation-cvv-wrapper > div > div > input";
    btnNext7 = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.payment-confirmation-button-section > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.payment-confirmation-button-section-next";
    textTitle = "#feedScrollBar > div.payment-confirmation-main-container > div.payment-confirmation-header > div";
    textItemName = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(3) > span:nth-child(1)";
    textQty = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(3) > span.payment-confirmation-item-qty-header";
    textAmount = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(3) > span.payment-confirmation-item-amount-header";
    textStudentName = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(5) > span:nth-child(1)";
    textMealTopUpAmount = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div.item-list-field > span.payment-confirmation-item-amount-header";
    textMyBalance = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(7) > span:nth-child(1)";
    textMyBalanceAmount = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(7) > span.payment-confirmation-item-amount-header";
    textSubtotal="#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(5) > div:nth-child(1) > span.payment-confirmation-item-title";
    textSubtotalAmount = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(5) > div:nth-child(1) > span.payment-confirmation-total-amount";
    textProgramFee = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(9) > div:nth-child(2) > span.payment-confirmation-item-title";
    textProgramFeeAmount = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(9) > div:nth-child(2) > span.payment-confirmation-total-amount";
    textTotal ="#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(9) > div:nth-child(3) > span.payment-confirmation-Total-title";
    textTotalAmount ="#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(9) > div:nth-child(3) > span.payment-confirmation-total-amount-bold";
    textPaymentFromBalance ="#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(9) > div:nth-child(4) > span.payment-confirmation-item-title";
    textPaymentFromBalanceAmount ="#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(9) > div:nth-child(4) > span.payment-confirmation-total-amount";
    textPaymentFromCard ="#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(9) > div:nth-child(5) > span.payment-confirmation-item-title";
    textPaymentFromCardAmount ="#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.item-list-student-main-container > div > div > div:nth-child(9) > div:nth-child(5) > span.payment-confirmation-total-amount";
    
    // btnScrollBar = "#feedScrollBar > div.ps__rail-y.ps--clicking > div"
    
    setCVVNumber(CVV){
        // cy.get('#feedScrollBar > div.ps__rail-y.ps--clicking > div').scrollTo('bottom')

        cy.get(this.textCVV).type(CVV);
    }
    clickNextButton7()  {
        cy.get(this.btnNext7).click();
    }

    verifyUI()  {
        cy.get(this.textTitle).invoke('text').should('include', 'Confirm & Pay');
        cy.get(this.textItemName).invoke('text').should('include', 'AUT_Item_1 (Breanna Wooden)');
        cy.get(this.textQty).invoke('text').should('include', '1');
        cy.get(this.textAmount).invoke('text').should('include', '$15.00');
        cy.get(this.textStudentName).invoke('text').should('include', 'Breanna Wooden');
        cy.get(this.textMealTopUpAmount).invoke('text').should('include', '$5.00');
        cy.get(this.textMyBalance).invoke('text').should('include', 'My Balance Top up');
        cy.get(this.textMyBalanceAmount).invoke('text').should('include', '$15.00');
        cy.get(this.textSubTotal).invoke('text').should('include', 'Subtotal');
        cy.get(this.textSubtotalAmount).invoke('text').should('include', '$35.00');
        cy.get(this.textProgramFee).invoke('text').should('include', 'Program Fee');
        cy.get(this.textProgramFeeAmount).invoke('text').should('include', '$5.00');
        cy.get(this.textTotal).invoke('text').should('include', 'Total');
        cy.get(this.textTotalAmount).invoke('text').should('include', '$40.00');
        cy.get(this.textPaymentFromBalance).invoke('text').should('include', 'Payment from balance');
        cy.get(this.textPaymentFromBalanceAmount).invoke('text').should('include', '$15.00');
        cy.get(this.textPaymentFromCard).invoke('text').should('include', 'Payment from selected card');
        cy.get(this.textPaymentFromCardAmount).invoke('text').should('include', '$15.00');

    }




}
export default Pay;
