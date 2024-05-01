class Invoices{

    verifyTitleInvoices()  {
        cy.get('p').contains('Invoices').should('exist')
    }

}
export default Invoices;