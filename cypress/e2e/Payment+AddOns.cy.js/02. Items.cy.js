import Login from "../../PageObjects/Login.js";
import LeftMenu from "../../PageObjects/LeftMenu.js";
import OrganizationsList from "../../PageObjects/OrganizationsList.js";
import AddOns from "../../PageObjects/AddOns.js";
import MealTopUp from "../../PageObjects/MealTopUp.js";
import MealSummary from "../../PageObjects/MealTopUpSummary.js";
import WalletTopUp from "../../PageObjects/MyBalanceTopUp.js";
import Pay from "../../PageObjects/Confirm&Pay.js";

// Log in to paywat as a Global Admin.
Cypress.Commands.add('loginAsAdmin', () => {
    cy.fixture('paywatlogin.json').then((credentials) => {
        const loginPage = new Login();
        loginPage.setUserName(credentials.username);
        loginPage.setPassWord(credentials.passwordAdmin);
        loginPage.clickLoginButton();
    });
});

// Navigate to organizations list.
Cypress.Commands.add('navigateToOrganizationsList', () => {
    const leftMenu = new LeftMenu();
    leftMenu.clickMenuIcon();
    leftMenu.clickOrganizations();
    const organizationsList = new OrganizationsList();
    cy.get(organizationsList.getLumenTouchElement()).first().click();
});

// Turn off the Add On settings --> Items.
describe('LoginToPaywat', () => {
    before(() => {
        cy.visit("https://preprod.paywat.com/login");
    });

    it('Global Admin Login and Navigate to Organizations List', () => {
        cy.loginAsAdmin();
        cy.navigateToOrganizationsList();
        cy.get('span').contains('Add-Ons').click();
        cy.wait(1000);
        cy.pause();
        const addOns = new AddOns();
        addOns.clickItems();
        cy.log('Items Turn Off')
    });
});

// Log in to Paywat as a Parent and proceed in the payment flow.
describe('LoginToPaywat as a Parent', () => {
    let credentials;

    before(() => {
        cy.visit("https://preprod.paywat.com/thirdparty/redirect?hid=d5d674fcc64006a9396da51d82ae4cc006d0f29ac894403dd1358193e7dd114d&flow=items");
        cy.fixture('paywatlogin.json').then(data => credentials = data);
    });

    it('Complete Payment Process', () => {
        const ln = new Login();
        ln.setPassWord(credentials.password);
        ln.clickLoginButton();

        //Top up meal balances.
        const mealTopUp = new MealTopUp();
        mealTopUp.setTopUpAmount(credentials.amount);
        mealTopUp.clickNextButton3();
       
        //Meal topup summary.
        const mealSummary = new MealSummary();
        mealSummary.clickNextButton4();

        //My balance topup.
        const walletTopUp = new WalletTopUp();
        walletTopUp.setWalletTopUpAmount(credentials.walletamount);
        walletTopUp.clickNextButton5();

        //Credit card selection.
        const cardSelection = new CardSelection();
        cardSelection.clickCreditCard();
        cardSelection.clickNextButton6();

        // Scroll to the bottom of the page
        cy.window().scrollTo('bottom', { ensureScrollable: false });

        // Confirm the payment.
        const pay = new Pay();
        pay.setCVVNumber(credentials.CVV);
    });
});

// Turn On the Add On settings --> Items.
describe('LoginToPaywat', () => {
    before(() => {
        cy.visit("https://preprod.paywat.com/login");
    });

    it('Global Admin Login and Navigate to Organizations List', () => {
        cy.loginAsAdmin();
        cy.navigateToOrganizationsList();
        cy.get('span').contains('Add-Ons').click();
        cy.wait(1000);
        const addOns = new AddOns();
        addOns.clickItems();
        cy.log('Items Turn On')
    });
});

