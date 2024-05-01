class CardTransactions{

    verifyTitleCardTransactions()  {
        cy.get('p').contains('Card Transactions').should('exist')
    }

}
export default CardTransactions;