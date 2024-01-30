
import Login from "../PageObjects/LoginPage2.js";



describe('LoginToPaywat', () => {
    it('Global Admin Login', () => {
        cy.visit("https://preprod.paywat.com/login")
        cy.fixture('paywatlogin.json').then((credintials)=>{
            const ln=new Login();
            ln.setUserName(credintials.username)
            ln.setPassWord(credintials.password)
            ln.clickLoginButton();
            ln.verifyLogin();
    })
        
    })
})
