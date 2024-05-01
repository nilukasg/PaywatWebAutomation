class ApprovePayouts {
    linkFirstPayoutRecord = "";

    verifyTitle()  {
        cy.get('p').contains('Approve Payouts').should('exist')
    }

    clickPayouts() {
        cy.get('span').contains('Payouts').click()
    }

    clickFirstPayoutRecord(){
        cy.get('p').first().click()
            .get('div').contains('Payout Details').should('exist')
        // cy.get(this.linkFirstPayoutRecord).click();
    }
    clickUnbatchedPayouts() {
        cy.get('span').contains('Unbatched Payouts').click()
    }
    clickFirstUnbatchedPayoutRecord(){
        cy.get('div').first().click()
            .get('div').contains('Payout Details').should('exist')
        // cy.get(this.linkFirstPayoutRecord).click();
    }

}
export default ApprovePayouts;