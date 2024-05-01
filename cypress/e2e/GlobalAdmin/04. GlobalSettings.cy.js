import Login from "../../PageObjects/Login.js";
import LeftMenu from "../../PageObjects/LeftMenu.js";
import OrganizationsList from "../../PageObjects/OrganizationsList.js";
import GlobalSettings from "../../PageObjects/GlobalSettings.js";


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
            leftMenu.clickOrganizations();

            // Click on Lumen Touch Test District           
            const organizationsList = new OrganizationsList();
            cy.get(organizationsList.getLumenTouchElement()).first().click();

            // Validate the organization details in each tab
            const globalSettings = new GlobalSettings();
            globalSettings.clickIntegrationTab();
            globalSettings.clickSettlementTab();
            globalSettings.clickGeneralTab();

        });
    });
});
