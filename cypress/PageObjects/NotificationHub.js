class NotificationHub {

    selectRowsPerpage1 = "#mui-54468";
    selectRowsPerpage2 ="";

    verifyTitle() {
        cy.get('p').contains('Notification Hub').should('exist')
    }

    verifyNotificationNames() {
        cy.get('div').contains('Notification Name').should('exist')
            .get('div').contains('Forgot Password').should('exist')
            .get('div').contains('Parent Invite').should('exist')
            .get('div').contains('Successful Password Reset').should('exist')
            .get('span').contains('Post Sent').should('exist')
            .get('span').contains('Merge Duplicate Account').should('exist')
    }
    verifyNotificationKeys() {
        cy.get('span').contains('Notification Key').should('exist')
            .get('div').contains('Global_Forgot_Password').should('exist')
            .get('div').contains('Global_Parent_Invite').should('exist')
            .get('div').contains('Global_Successful_Password_Reset').should('exist')
            .get('div').contains('Global_Post_Sent').should('exist')
            .get('span').contains('Merge_Dupilcate_Account').should('exist')

    }

    clickRowsPerPage() {
        cy.get('div').contains('5').click()
        // cy.get(this.selectRowsPerpage1).click();
        cy.get('li').contains('20').click()

    }

}
export default NotificationHub;
