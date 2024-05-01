class OrganizationDetails {

    clickOverviewTab() {
        cy.get('span').contains('Overview').click()
            .get('span').contains('Save').click()
            .get('p').contains('Updated the organization successfully!').should('exist')
            .get('span').contains('close').click();
    }
    clickUsersTab() {
        cy.get('span').contains('Users').click();

    }
    clickMerchantDetailsTab() {
        cy.get('span').contains('Merchant Details').click()
            .get('span').contains('Save').click()
            .get('p').contains('Updated the Merchant Details successfully!').should('exist')
            .get('span').contains('close').click()

    }
    clickSettingsTab() {
        cy.get('span').contains('Settings').click()
            .get('span').contains('Save').click()
            .get('p').contains('Updated the organization partner successfully!').should('exist')
            .get('span').contains('close').click()


    }
    clickAddOnsTab() {
        cy.get('span').contains('Add-Ons').click();

    }
    clickSubOrganizationsTab() {
        cy.get('span').contains('Sub Organizations').click()
            .get('th').contains('Middle School').should('exist')
            .get('th').contains('Career Center').should('exist')
            .get('th').contains('District Office').should('exist')
            .get('th').contains('Early Childhood Center').should('exist')
            .get('th').contains('High School').should('exist')
            .get('th').contains('Elementary').should('exist')

    }

}
export default OrganizationDetails;