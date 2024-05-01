class Items{

    verifyTitleItems()  {
        cy.get('p').contains('Card Transactions').should('exist')
    }

}
export default Items;