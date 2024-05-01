import Login from "../../PageObjects/Login.js";
import LeftMenu from "../../PageObjects/LeftMenu.js";
import NotificationHub from "../../PageObjects/NotificationHub.js";

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
            leftMenu.clickNotificationHub();
            cy.wait(1000);

            // Validate the Notification Hub Existing email templates
            const notificationHub = new NotificationHub();
            notificationHub.verifyTitle();
            notificationHub.verifyNotificationNames();
            notificationHub.verifyNotificationKeys();
            // notificationHub.clickRowsPerPage();

        });
    });
});
