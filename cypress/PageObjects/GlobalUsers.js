class GlobalUsers{

    verifyTitle()  {
        cy.get('p').contains('Global Users').should('exist')
    }

    verifyUser01()  {
        cy.get('div').contains('568593').should('exist')
            .get('div').contains('Paudie Shea').should('exist')
            .get('div').contains('padraig@paywat.com').should('exist')
            .get('span').contains('Active').should('exist')
    }
    verifyUser02()  {
        cy.get('div').contains('580606').should('exist')
            .get('div').contains('Dileep Rajapaksha').should('exist')
            .get('div').contains('dileep.rajapaksha@schoolgrove.com').should('exist')
            .get('span').contains('Pending').should('exist')
    }



}
export default GlobalUsers;
