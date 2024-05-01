class TransactionIntegration{

    verifyTitleTransactionIntegration()  {
        cy.get('p').contains('Transaction Integration').should('exist')
    }


}
export default TransactionIntegration;
