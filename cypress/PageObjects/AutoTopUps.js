class AutoTopUps {
  

    verifyTitle()  {
        cy.get('p').contains('Auto Top Ups').should('exist')
    }

    clickSuccessfulTab() {
        cy.get('span').contains('Successful').click()
    }
    clickFailedTab() {
        cy.get('span').contains('Failed').click()
    }  

}
export default AutoTopUps;