class People{

    verifyTitlePeople()  {
        cy.get('p').contains('People').should('exist')
    }

}
export default People;