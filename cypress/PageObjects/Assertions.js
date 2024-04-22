class Assertions {
    textTitle = "#feedScrollBar > div.payment-confirmation-main-container > div.payment-confirmation-header > div";
    textEnterCvv = "#feedScrollBar > div.payment-confirmation-main-container > div:nth-child(2) > div.payment-confirmation-checkbox-wrapper";
    textTitleSelectItems = "#feedScrollBar > div.item-list-main-container > div.item-list-header > div";
    textStudentName = "#feedScrollBar > div.item-list-main-container > div:nth-child(2) > div.item-list-student-main-container > div.item-list-student-title";
    textTitleItemsSummary = "#feedScrollBar > div.item-list-summary-main-container > div.item-list-summary-header > div";

// Assertions - Select Items UI
assertTitleSelectItems() {
    cy.get(this.textTitleSelectItems).invoke('text').should('include', 'Select Item');
    Cypress.log({
        name: 'Assertion Status',
        displayName: 'Title - Select Item',
        message: 'Passed'
    });
}

assertStudent() {
    cy.get(this.textStudentName).invoke('text').should('include', 'Breanna Rose Wooden');
    Cypress.log({
        name: 'Assertion Status',
        displayName: 'Student Name',
        message: 'Passed'
    });

}

assertItemPrice() {
    cy.get('span').contains('$15.00').should('exist');
    Cypress.log({
        name: 'Assertion Status',
        displayName: 'Item Price',
        message: 'Passed'
    });
}

assertItemsSubTotalAmount() {
    cy.get('span').contains('$15.00').should('exist');
    Cypress.log({
        name: 'Assertion Status',
        displayName: 'Items Sub Total Amount',
        message: 'Passed'
    });
}

// Assertions - Items Summary
assertTitleItemsSummary() {
    cy.get(this.textTitleItemsSummary).invoke('text').should('include', 'Item Summary');
    Cypress.log({
        name: 'Assertion Status',
        displayName: 'Title - Item Summary',
        message: 'Passed'
    });
}
assertNames() {
    cy.get('span').contains('Breanna Rose Wooden').should('exist');
    Cypress.log({
        name: 'Assertion Status',
        displayName: 'Student Name',
        message: 'Passed'
    });
}

// Assertions - Confirm & Pay UI
    assertTitle() {
        cy.get(this.textTitle).invoke('text').should('include', 'Confirm & Pay');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Title',
            message: 'Passed'
        });
    }
    assertItemName() {
        cy.get('span').contains('AUT_Item_1 (Breanna Wooden)').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Item Name',
            message: 'Passed'
        });
    }
    assertQTY() {
        cy.get('span').contains('1').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Item Quantity',
            message: 'Passed'
        });
    }
    assertAmount() {
        cy.get('span').contains('$19.88').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Item Price',
            message: 'Passed'
        });
    }
    assertStudentName() {
        cy.get('span').contains('Breanna Rose Wooden').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Student Name',
            message: 'Passed'
        });
    }
    assertMealTopUpAmount() {
        cy.get('span').contains('$19.88').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Meal TopUp Amount',
            message: 'Passed'
        });
    }
    assertMyBalance() {
        cy.get('span').contains('My Balance Top up').should('exist');

        Cypress.log({
            name: 'Assertion Status',
            displayName: 'My Balance Top up',
            message: 'Passed'
        });
    }
    assertMyBalanceAmount() {
        cy.get('span').contains('$4.00').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'My Balance Top up Amount',
            message: 'Passed'
        });
    }
    assertSubTotal() {
        cy.get('span').contains('Subtotal').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Sub Total',
            message: 'Passed'
        });
    }
    assertSubTotalAmount() {
        cy.get('span').contains('$19.00').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Sub Total Amount',
            message: 'Passed'
        });
    }
    assertProgramFee() {
        cy.get('span').contains('Program Fee').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Program Fee',
            message: 'Passed'
        });
    }
    assertProgramFeeAmount() {
        cy.get('span').contains('$0.88').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Program Fee Amount',
            message: 'Passed'
        });
    }
    assertTotal() {
        cy.get('span').contains('Total').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Total',
            message: 'Passed'
        });
    }
    assertTotalAmount() {
        cy.get('span').contains('$19.88').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Total Amount',
            message: 'Passed'
        });
    }
    assertPaymentFromBalance() {
        cy.get('span').contains('Payment from balance').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Payment From Balance',
            message: 'Passed'
        });
    }
    assertPaymentFromBalanceAmount() {
        cy.get('span').contains('$0.00').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Payment From Balance Amount',
            message: 'Passed'
        });
    }
    assertPaymentFromCard() {
        cy.get('span').contains('Payment from selected card').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Payment From Card',
            message: 'Passed'
        });
    }
    assertPaymentFromCardAmount() {
        cy.get('span').contains('$19.88').should('exist');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Payment From Card Amount',
            message: 'Passed'
        });
    }
    assertEnterCvv() {
        cy.get(this.textEnterCvv).invoke('text').should('include', 'Enter your CVV for your card ending 0000 to confirm you wish to pay $19.88');
        Cypress.log({
            name: 'Assertion Status',
            displayName: 'Enter The CVV Explanation Text',
            message: 'Passed'
        });
    }

}
export default Assertions;











