import Login from "../../PageObjects/Login.js";
import SelectItem from "../../PageObjects/ItemSelection.js";
import MealTopUp from "../../PageObjects/MealTopUp.js";
import WalletTopUp from "../../PageObjects/MyBalanceTopUp.js";
import CardSelection from "../../PageObjects/CreditCardSelection.js";
import AddCard from "../../PageObjects/AddCard.js";
import Pay from "../../PageObjects/Confirm&Pay.js";

describe('LoginToPaywat as a Parent', () => {
    let credentials;

    before(() => {
        // Visit the website and load credentials from fixture file
        cy.visit("https://preprod.paywat.com/thirdparty/redirect?hid=d5d674fcc64006a9396da51d82ae4cc006d0f29ac894403dd1358193e7dd114d&flow=items");
        cy.fixture('paywatlogin.json').then(data => credentials = data);
    });

    it('Complete Payment Process', () => {
        const ln = new Login();
        ln.setPassWord(credentials.password);
        ln.clickLoginButton();

        const selectItem = new SelectItem();
        selectItem.clickSkipButton();

        const mealTopUp = new MealTopUp();
        mealTopUp.clickNextButton3();

        const walletTopUp = new WalletTopUp();
        walletTopUp.setWalletTopUpAmount(credentials.walletamount);
        walletTopUp.clickNextButton5();

        const cardSelection = new CardSelection();
        cardSelection.clickAddNew();
        cy.wait(5000)

        const addCard = new AddCard();
        addCard.setCardNumber();

        const pay = new Pay();
        pay.setCVVNumber(credentials.CVV);
        pay.clickNextButton7();
    });
});
