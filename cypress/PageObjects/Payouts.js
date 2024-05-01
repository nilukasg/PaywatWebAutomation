class Payouts {
    linkFirstPayoutRecord = "#feedScrollBar > div.jss10773 > div.flex.container.w-full > div > div.jss10779.overflow-hidden.jss10951 > div.jss9699.jss10781.flex.ps > div.MuiDataGrid-root.MuiDataGrid-root.main-container.MuiDataGrid-autoHeight > div.MuiDataGrid-main > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > div:nth-child(1)";
    linkFirstUnbatchedPayoutRecord = "#feedScrollBar > div.jss10773 > div.flex.container.w-full > div > div.jss10779.overflow-hidden.jss10891 > div.jss9699.jss10781.flex.ps > div.MuiDataGrid-root.MuiDataGrid-root.main-container.MuiDataGrid-autoHeight > div.MuiDataGrid-main > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > div.MuiDataGrid-cell.table-bold-value.MuiDataGrid-cell--textLeft";
    
    verifyTitle()  {
        cy.get('p').contains('Payouts').should('exist')
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
export default Payouts;