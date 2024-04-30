import Login from "../../PageObjects/Login.js";
import SelectItem from "../../PageObjects/ItemSelection.js";
import ItemSummary from "../../PageObjects/ItemSummary.js";
import MealTopUp from "../../PageObjects/MealTopUp.js";
import MealSummary from "../../PageObjects/MealTopUpSummary.js";
import WalletTopUp from "../../PageObjects/MyBalanceTopUp.js";
import CardSelection from "../../PageObjects/CreditCardSelection.js";
import Pay from "../../PageObjects/Confirm&Pay.js";
import ThankYouPage from "../../PageObjects/ThankYouPage.js";
import Assertions from "../../PageObjects/Assertions.js";
import Transactions from "../../PageObjects/Transactions.js";

describe('Payment flow with Item/s, Meal TopUp & Wallet TopUp', () => {
    let credentials;

    before(() => {
        // Visit the website and load credentials from fixture file
        cy.visit("https://preprod.paywat.com/thirdparty/redirect?hid=d5d674fcc64006a9396da51d82ae4cc006d0f29ac894403dd1358193e7dd114d&flow=items");
        cy.fixture('paywatlogin.json').then(data => credentials = data);
    });

    it('Item Payment, Meal TopUp & Wallet TopUp', () => {
        const ln = new Login();
        ln.setPassWord(credentials.password);
        ln.clickLoginButton();

        const assertions = new Assertions();
        assertions.assertTitleSelectItems();
        assertions.assertStudent();
        assertions.assertQTY();
        assertions.assertItemPrice();
        assertions.assertSubTotal();
        assertions.assertItemsSubTotalAmount();

        const selectItem = new SelectItem();
        selectItem.clickSelectAll();
        selectItem.clickNextButton();

        assertions.assertTitleItemsSummary();
        assertions.assertNames();
        assertions.assertItemPrice();
        assertions.assertSubTotal();
        assertions.assertItemsSubTotalAmount();

        const itemSummary = new ItemSummary();
        itemSummary.clickNextButton2();

        const mealTopUp = new MealTopUp();
        assertions.assertTitleMealTopup();
        mealTopUp.setTopUpAmount(credentials.amount);
        mealTopUp.clickNextButton3();

        const mealSummary = new MealSummary();
        assertions.assertTitleMealTopupSummary();
        mealSummary.clickNextButton4();

        const walletTopUp = new WalletTopUp();
        assertions.assertTitleMyBalanceTopup();
        walletTopUp.setWalletTopUpAmount(credentials.walletamount);
        walletTopUp.clickNextButton5();

        const cardSelection = new CardSelection();
        assertions.assertTitlePayWith();
        cardSelection.clickCreditCard();
        cardSelection.clickNextButton6();

        // Scroll to the bottom of the page
        cy.window().scrollTo('bottom', { ensureScrollable: false });
         
        assertions.assertTitle();
        assertions.assertItemName();
        assertions.assertQTY();
        assertions.assertAmount();
        assertions.assertStudentName();
        assertions.assertMealTopUpAmount();
        assertions.assertMyBalance();
        assertions.assertMyBalanceAmount();
        assertions.assertSubTotal();
        assertions.assertSubTotalAmount();
        assertions.assertProgramFee();
        assertions.assertProgramFeeAmount();
        assertions.assertTotal();
        assertions.assertTotalAmount();
        assertions.assertPaymentFromBalance();
        assertions.assertPaymentFromBalanceAmount();
        assertions.assertPaymentFromCard();
        assertions.assertPaymentFromCardAmount();
        assertions.assertEnterCvv();

        const pay = new Pay();
        pay.setCVVNumber(credentials.CVV);
        pay.clickNextButton7();

        assertions.assertTitleThankYou();
        assertions.assertSuccessStatus();
        assertions.assertWalletBalance();

        const thankYouPage = new ThankYouPage;
        thankYouPage.clickInvoiceLink();
        thankYouPage.clickUserName();
        thankYouPage.clickViewTransactions();

        const transactions = new Transactions;
        transactions.clickFirstInvoice();

    });
});
