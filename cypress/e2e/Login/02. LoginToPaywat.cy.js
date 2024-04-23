
import Login from "../../PageObjects/Login.js";

describe('LoginToPaywat', () => {
    it('Global Admin Login', () => {
        cy.visit("https://preprod.paywat.com/login")
        cy.fixture('paywatlogin.json').then((credintials)=>{
            const ln=new Login();
            ln.setUserName(credintials.username)
            ln.setPassWord(credintials.passwordAdmin)
            ln.clickLoginButton();
            ln.verifyLogin();
    })
        
    })
})
