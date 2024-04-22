
import Login from "../PageObjects/Login.js";
import SelectItem from "../PageObjects/ItemSelection.js";
import ItemSummary from "../PageObjects/ItemSummary.js";
import MealTopUp from "../PageObjects/MealTopUp.js";
import MealSummary from "../PageObjects/MealTopUpSummary.js";
import WalletTopUp from "../PageObjects/MyBalanceTopUp.js";
import CardSelection from "../PageObjects/CreditCardSelection.js";
import Pay from "../PageObjects/Confirm&Pay.js";

describe('LoginToPaywat as a Parent', () => {
    
    before(() => {
        // Visit the website
        cy.visit("https://preprod.paywat.com/thirdparty/redirect?hid=d5d674fcc64006a9396da51d82ae4cc006d0f29ac894403dd1358193e7dd114d&flow=items");
        
        // Load credentials from fixture file and perform login
        cy.fixture('paywatlogin.json').then((credentials) => {
            const ln = new Login();
            ln.setPassWord(credentials.password);
            ln.clickLoginButton();
        })
    })
    it('Item Selection', () => {
        // Perform item selection
        const ln = new SelectItem();
        ln.clickSelectAll();
        ln.clickNextButton();

        const ln2 =new ItemSummary();
        ln2.clickNextButton2();

        cy.fixture('paywatlogin.json').then((credentials) => {
            const ln3 = new MealTopUp();
            ln3.setTopUpAmount(credentials.amount);

            ln3.clickNextButton3();


        const ln4 =new MealSummary();
        ln4.clickNextButton4();
        })

        cy.fixture('paywatlogin.json').then((credentials) => {
            const ln5 = new WalletTopUp();
            ln5.setWalletTopUpAmount(credentials.walletamount);
            ln5.clickNextButton5();
        })


        const ln6 =new CardSelection();
        ln6.clickCreditCard();
        ln6.clickNextButton6();
    
        cy.pause()  
        cy.window().scrollTo('bottom', { ensureScrollable: false })
        
        cy.fixture('paywatlogin.json').then((credentials) => {
            const ln7 = new Pay();
            ln7.setCVVNumber(credentials.CVV);
            ln7.clickNextButton7();
        })

    })


    
    
})
