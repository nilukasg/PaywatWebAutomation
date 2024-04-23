class Assertions {
    textTitle = "#feedScrollBar > div.payment-confirmation-main-container > div.payment-confirmation-header > div";
    textEnterCvv = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.payment-confirmation-checkbox-wrapper";
    textTitleSelectItems = "#feedScrollBar > div.item-list-main-container > div.item-list-header > div";
    textStudentName = "#feedScrollBar > div.item-list-main-container > div:nth-child(2) > div.item-list-student-main-container > div.item-list-student-title";
    textTitleItemsSummary = "#feedScrollBar > div.item-list-summary-main-container > div.item-list-summary-header > div";
    textTitleMealTopup = "#feedScrollBar > div.account-balance-top-up-main-container > div.account-balance-top-up-main-title";
    textTitleMealTopupSummary = "#feedScrollBar > div.meal-top-up-summary-main-container > div.meal-top-up-summary-header > div";
    textTitleMyBalanceTopup = "#feedScrollBar > div.account-balance-top-up-main-container > div.account-balance-top-up-main-title";
    textTitlePayWith= "#feedScrollBar > div.item-Payment-Card-List-main-container > div.item-Payment-Card-List-header > div";

    // Assertions - Select Items UI
    assertTitleSelectItems() {
        cy.get(this.textTitleSelectItems).invoke('text').should('include', 'Select Item');
    }
    assertStudent() {
        cy.get(this.textStudentName).invoke('text').should('include', 'Breanna Rose Wooden');
    }
    assertItemPrice() {
        cy.get('span').contains('$15.00').should('exist');
    }
    assertItemsSubTotalAmount() {
        cy.get('span').contains('$15.00').should('exist');
    }

    // Assertions - Items Summary
    assertTitleItemsSummary() {
        cy.get(this.textTitleItemsSummary).invoke('text').should('include', 'Item Summary');
    }
    assertNames() {
        cy.get('span').contains('Breanna Rose Wooden').should('exist');
    }  
      
    // Assertions - Meal Top Up
    assertTitleMealTopup() {
        cy.get(this.textTitleMealTopup).invoke('text').should('include', 'Top Up Meal Balances');
    }
    
    // Assertions - Meal TopUp Summary
    assertTitleMealTopupSummary() {
        cy.get(this.textTitleMealTopupSummary).invoke('text').should('include', 'Meal Top Up Summary');
    }

    // Assertions - My balance TopUp
    assertTitleMyBalanceTopup() {
        cy.get(this.textTitleMyBalanceTopup).invoke('text').should('include', 'Top Up My Balance for Next Time');
    }

    // Assertions - Credit Card selection
    assertTitlePayWith() {
        cy.get(this.textTitlePayWith).invoke('text').should('include', 'Pay with');
    }

    // Assertions - Confirm & Pay UI
    assertTitle() {
        cy.get(this.textTitle).invoke('text').should('include', 'Confirm & Pay');
    }
    assertItemName() {
        cy.get('span').contains('AUT_Item_1 (Breanna Wooden)').should('exist');
    }
    assertQTY() {
        cy.get('span').contains('1').should('exist');
    }
    assertAmount() {
        cy.get('span').contains('$15.00').should('exist');
    }
    assertStudentName() {
        cy.get('span').contains('Breanna Rose Wooden').should('exist');
    }
    assertMealTopUpAmount() {
        cy.get('span').contains('$2.00').should('exist');
    }
    assertMyBalance() {
        cy.get('span').contains('My Balance Top up').should('exist');
    }
    assertMyBalanceAmount() {
        cy.get('span').contains('$4.00').should('exist');
    }
    assertSubTotal() {
        cy.get('span').contains('Subtotal').should('exist');
    }
    assertSubTotalAmount() {
        cy.get('span').contains('$21.00').should('exist');
    }
    assertProgramFee() {
        cy.get('span').contains('Program Fee').should('exist');
    }
    assertProgramFeeAmount() {
        cy.get('span').contains('$0.94').should('exist');
    }
    assertTotal() {
        cy.get('span').contains('Total').should('exist');
    }
    assertTotalAmount() {
        cy.get('span').contains('$21.94').should('exist');
    }
    assertPaymentFromBalance() {
        cy.get('span').contains('Payment from balance').should('exist');
    }
    assertPaymentFromBalanceAmount() {
        cy.get('span').contains('$0.00').should('exist');
    }
    assertPaymentFromCard() {
        cy.get('span').contains('Payment from selected card').should('exist');
    }
    assertPaymentFromCardAmount() {
        cy.get('span').contains('$21.94').should('exist');
    }
    assertEnterCvv() {
        cy.get(this.textEnterCvv).invoke('text').should('include', 'Enter your CVV for your card ending 0000 to confirm you wish to pay $21.94');
    }

}
export default Assertions;











