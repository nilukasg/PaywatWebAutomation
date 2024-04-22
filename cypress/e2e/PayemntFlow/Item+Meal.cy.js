import Login from "../../PageObjects/Login.js";
import SelectItem from "../../PageObjects/ItemSelection.js";
import ItemSummary from "../../PageObjects/ItemSummary.js";
import MealTopUp from "../../PageObjects/MealTopUp.js";
import MealSummary from "../../PageObjects/MealTopUpSummary.js";
import WalletTopUp from "../../PageObjects/MyBalanceTopUp.js";
import CardSelection from "../../PageObjects/CreditCardSelection.js";
import Pay from "../../PageObjects/Confirm&Pay.js";
import Assertions from "../../PageObjects/Assertions.js";

describe('LoginToPaywat as a Parent', () => {
    let credentials;

    before(() => {
        // Visit the website and load credentials from fixture file
        cy.visit("https://preprod.paywat.com/thirdparty/redirect?hid=d5d674fcc64006a9396da51d82ae4cc006d0f29ac894403dd1358193e7dd114d&flow=items");
        cy.fixture('paywatlogin.json').then(data => credentials = data);
    });

    it('Item Payment & Meal TopUp', () => {
        const ln = new Login();
        ln.setPassWord(credentials.password);
        ln.clickLoginButton();

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

        const assertions = new Assertions();    
        assertions.assertTitle(); 
        assertions.assertItemName(); 
        assertions.assertQTY(); 
        assertions.assertAmount();     
        assertions.assertStudentName();
        assertions.assertMealTopUpAmount(); 
        assertions.assertMyBalance(); 
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
    });
});
