import Login from "../PageObjects/Login.js";
import SelectItem from "../PageObjects/ItemSelection.js";
import ItemSummary from "../PageObjects/ItemSummary.js";
import MealTopUp from "../PageObjects/MealTopUp.js";
import MealSummary from "../PageObjects/MealTopUpSummary.js";
import WalletTopUp from "../PageObjects/MyBalanceTopUp.js";
import CardSelection from "../PageObjects/CreditCardSelection.js";
import Pay from "../PageObjects/Confirm&Pay.js";

describe('LoginToPaywat as a Parent', () => {
    let credentials;

    before(() => {
        // Visit the website and perform login
        cy.visit("https://preprod.paywat.com/thirdparty/redirect?hid=d5d674fcc64006a9396da51d82ae4cc006d0f29ac894403dd1358193e7dd114d&flow=items");
        cy.fixture('paywatlogin.json').then(data => credentials = data);
        const ln = new Login();
        ln.setPassWord(credentials.password);
        ln.clickLoginButton();
    });

    it('Complete Payment Process', () => {
        const selectItem = new SelectItem();
        selectItem.clickSelectAll();
        selectItem.clickNextButton();

        const itemSummary = new ItemSummary();
        itemSummary.clickNextButton2();

        const mealTopUp = new MealTopUp();
        mealTopUp.setTopUpAmount(credentials.amount);
        mealTopUp.clickNextButton3();

        const mealSummary = new MealSummary();
        mealSummary.clickNextButton4();

        const walletTopUp = new WalletTopUp();
        walletTopUp.setWalletTopUpAmount(credentials.walletamount);
        walletTopUp.clickNextButton5();

        const cardSelection = new CardSelection();
        cardSelection.clickCreditCard();
        cardSelection.clickNextButton6();

        // Scroll to the bottom of the page
        cy.window().scrollTo('bottom', { ensureScrollable: false });

        const pay = new Pay();
        pay.setCVVNumber(credentials.CVV);
        pay.clickNextButton7();
    });
});
