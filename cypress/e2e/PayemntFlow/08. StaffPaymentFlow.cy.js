import Login from "../../PageObjects/Login.js";
import SelectItem from "../../PageObjects/ItemSelection.js";
import ItemSummary from "../../PageObjects/ItemSummary.js";
import MealTopUp from "../../PageObjects/MealTopUp.js";
import MealSummary from "../../PageObjects/MealTopUpSummary.js";
import WalletTopUp from "../../PageObjects/MyBalanceTopUp.js";
import CardSelection from "../../PageObjects/CreditCardSelection.js";
import Pay from "../../PageObjects/Confirm&Pay.js";
import ThankYouPage from "../../PageObjects/ThankYouPage.js";
import Transactions from "../../PageObjects/Transactions.js";

describe('Payment flow with Item/s, Meal TopUp & Wallet TopUp', () => {
    let credentials;

    before(() => {
        // Visit the website and load credentials from fixture file
        cy.visit("https://preprod.paywat.com/thirdparty/redirect?hid=7cece2b83d73d868cb17e4bff8f4ce1b92b04e2ac42908430010c2b75bd65f9b&flow=balance");
        cy.fixture('paywatlogin.json').then(data => credentials = data);
    });

    it('Item Payment, Meal TopUp & Wallet TopUp', () => {

        const ln = new Login();
        ln.setPassWord(credentials.password);
        ln.clickLoginButton();

        const mealTopUp = new MealTopUp();
        mealTopUp.setTopUpStudent(credentials.amount);
        mealTopUp.setTopUpMyMeal(credentials.amountMyMeal);
        mealTopUp.clickNextButton3();

        const mealSummary = new MealSummary();
        mealSummary.clickNextButton4();

        const selectItem = new SelectItem();
        selectItem.clickSelectAll();
        selectItem.clickNextButton();

        const itemSummary = new ItemSummary();
        itemSummary.clickNextButton2();

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

        const thankYouPage = new ThankYouPage;
        thankYouPage.clickInvoiceLink();
        thankYouPage.clickUserName();
        thankYouPage.clickViewTransactions();

        const transactions = new Transactions;
        transactions.clickOutside();
        transactions.clickFirstInvoice();

    });
});
