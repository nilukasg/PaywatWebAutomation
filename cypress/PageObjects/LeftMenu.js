class LeftMenu {

    menuIcon = "#fuse-toolbar > div > button > span > span";
    btnSelectAll = "";

    clickMenuIcon() {
        cy.get(this.menuIcon).click();
    }
    clickOrganizations() {
        cy.get('span').contains('Organizations').click()
        cy.wait(1000)
    }
    clickGlobalUsers() {
        cy.get('span').contains('Global Users').click()

    }
    clickNotificationHub() {
        cy.get('span').contains('Notification Hub').click()

    }
    clickGlobalSettings() {
        cy.get('span').contains('Global Settings').click()

    }
    clickReports() {
        cy.get('span').contains('Reports').click()

    }
    clickTransactionIntegration() {
        cy.get('span').contains('Transaction Integration').click()

    }
    clickApprovePayouts() {
        cy.get('span').contains('Approve Payouts').click()

    }
    clickAutoTopups() {
        cy.get('span').contains('Auto Top ups').click()

    }
    clickPaymentHub() {
        cy.get('span').contains('Payment Hub').click()

    }
    clickPaymentList() {
        cy.get('span').contains('Payment List').click()

    }
    clickAccounts() {
        cy.get('span').contains('Accounts').click()

    }
    clickPayouts() {
        cy.get('span').contains('local_shipping').click()

    }
    clickInvoices() {
        cy.get('span').contains('Invoices').click()

    }
    clickCardTransactions() {
        cy.get('span').contains('Card Transactions').click()

    }
    clickTimeline() {
        cy.get('span').contains('Timeline').click()

    }
    clickPeople() {
        cy.get('span').contains('People').click()

    }
    clickItems() {
        cy.get('span').contains('Items').click()

    }
}
export default LeftMenu;
