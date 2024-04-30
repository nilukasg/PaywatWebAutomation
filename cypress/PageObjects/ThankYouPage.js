class ThankYouPage{

    linkInvoice = "#feedScrollBar > div.payment-confirmed-main-container > div:nth-child(2) > div > div > div.payment-confirmed-status-container > a";
    textUserName = "#fuse-toolbar > div > div.flex.items-center.px-16 > button > span.MuiTouchRipple-root-334";
    linkViewTransactions = "body > div.MuiPopover-root-195 > div.MuiPaper-root-97.MuiPopover-paper-196.py-8.MuiPaper-elevation8-108.MuiPaper-rounded-98 > li:nth-child(1) > div.MuiListItemText-root-422 > span";
    
    clickInvoiceLink()  {
        cy.get(this.linkInvoice).click();
    }
    clickUserName()  {
        cy.get(this.textUserName).click();
    }
    clickViewTransactions()  {
        cy.get(this.linkViewTransactions).click();
    }

}
export default ThankYouPage;