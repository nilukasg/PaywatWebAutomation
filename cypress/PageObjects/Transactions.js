class Transactions {
 
    linkFirstInvoice = "#feedScrollBar > div.transaction-list-main-container > div.MuiDataGrid-root.MuiDataGrid-root.main-container.MuiDataGrid-autoHeight > div.MuiDataGrid-main > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div > p:nth-child(1)";
    
    clickFirstInvoice(){
        cy.get(this.linkFirstInvoice).click();
    }
    clickOutside(){
        cy.get('body').click();
    }
}
export default Transactions;