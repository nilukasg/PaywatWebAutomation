class GlobalSettings {

    clickIntegrationTab() {
        cy.get('span').contains('Integration').click()
            .get('span').contains('Save').click()
            .get('p').contains('Setting was updated successfully').should('exist')
            .get('span').contains('close').click();
    }
    clickSettlementTab() {
        cy.get('span').contains('Settlement').click()
            .get('span').contains('Save').click()
            .get('p').contains('Setting was updated successfully').should('exist')
            .get('span').contains('close').click();

    }
    clickGeneralTab() {
        cy.get('span').contains('General').click()
            .get('span').contains('Save').click()
            .get('p').contains('Setting was updated successfully').should('exist')
            .get('span').contains('close').click()

    }

}
export default GlobalSettings;