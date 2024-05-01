class ApprovePayouts {
    linkFirstPayoutRecord = "#feedScrollBar > div.approve-payouts-main-container > div.MuiDataGrid-root.MuiDataGrid-root.main-container.MuiDataGrid-autoHeight > div.MuiDataGrid-main > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > div:nth-child(1)";
    linkFirstUnbatchedPayoutRecord = "#feedScrollBar > div.approve-payouts-main-container > div.MuiDataGrid-root.MuiDataGrid-root.main-container.MuiDataGrid-autoHeight > div.MuiDataGrid-main > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > div:nth-child(2)";
    
    verifyTitle()  {
        cy.get('p').contains('Approve Payouts').should('exist')
    }

    clickPayouts() {
        cy.get('span').contains('Payouts').click()
    }

    clickFirstPayoutRecord(){   
        cy.get(this.linkFirstPayoutRecord).click()
            .get('div').contains('Payout Details').should('exist')
    }
    clickBackArrow(){   
        cy.get('span').contains('Payouts').click()
    }
    clickUnbatchedPayouts() {
        cy.get('span').contains('Unbatched Payouts').click()
    }
    clickFirstUnbatchedPayoutRecord(){
        cy.get(this.linkFirstUnbatchedPayoutRecord).click()
            .get('div').contains('Payout Details').should('exist')
    }

}
export default ApprovePayouts;