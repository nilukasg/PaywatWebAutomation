class Accounts {

    verifyTitle() {
        cy.get('p').contains('Accounts').should('exist')
    }

    clickPaymentsAccountsTab() {
        cy.get('span').contains('Payments Accounts').click()

    }
    clickBankAccountsTab() {
        cy.get('span').contains('Bank Accounts').click()


    }
    clickDefaultsTab() {
        cy.get('span').contains('Defaults').click()

    }

}
export default Accounts;
