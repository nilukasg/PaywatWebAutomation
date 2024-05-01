import Login from "../../PageObjects/Login.js";
import LeftMenu from "../../PageObjects/LeftMenu.js";
import ApprovePayouts from "../../PageObjects/ApprovePayouts.js";


describe('LoginToPaywat', () => {
    it('Global Admin Login and Navigate to Organizations List', () => {
        // Visit the URL
        cy.visit("https://preprod.paywat.com/login");

        // Load credentials from fixture file
        cy.fixture('paywatlogin.json').then((credentials) => {
            // Create instance of Login page object
            const loginPage = new Login();
            loginPage.setUserName(credentials.username);
            loginPage.setPassWord(credentials.passwordAdmin);

            // Click the login button
            loginPage.clickLoginButton();

            // Click on menu icon and then navigate to Organizations
            const leftMenu = new LeftMenu();
            leftMenu.clickMenuIcon();
            leftMenu.clickReports();
            leftMenu.clickApprovePayouts();

            // Validate the Transaction Integration UI
            const approvePayouts = new ApprovePayouts();
            approvePayouts.verifyTitle();
            approvePayouts.clickPayouts();
            approvePayouts.clickFirstPayoutRecord();
            approvePayouts.clickUnbatchedPayouts();
            approvePayouts.clickFirstUnbatchedPayoutRecord();
        });
    });
});
