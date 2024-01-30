describe('My First Test', () => {
    it('verify title - positive', () => {
        cy.visit("https://preprod.paywat.com/login")
        cy.title().should('eq','PayWat - Web Admin')
    })

    it('verify title - Nagative', () => {
        cy.visit("https://preprod.paywat.com/login")
        cy.title().should('eq','Paywat123')
    })

}) 