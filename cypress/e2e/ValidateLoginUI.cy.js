import LoginUi from "../PageObjects/LoginUi.js";


describe('Validate Login UI componemts', () => {
    it('Validate URL', () => {
        cy.visit("https://preprod.paywat.com/login")

        cy.url().should('include','preprod.paywat.com')
        .and('eq','https://preprod.paywat.com/login')
        .and('contain','login')
    })

    it('Validate the title', () => {
        cy.visit("https://preprod.paywat.com/login")
        cy.title().should('include','PayWat')
        .and('eq','PayWat - Web Admin')
        .and('contain','Web Admin')
    })
    it('Validate UI elements', () => {
        cy.visit("https://preprod.paywat.com/login")
        const ele=new LoginUi();
        ele.verifyLogo();
        ele.verifyDescription();
        ele.verifyEmailFiled();
        ele.verifyPWField();
        ele.verifyLoginButton();
        ele.verifyForgotPWLinkText();
        ele.verifyTerms();
        ele.verifyPrivacyPolicyText();
        ele.verifyCopyRightText();
    })
})

describe('LoginToPaywat', () => {
    it('Global Admin Login', () => {
        cy.visit("https://preprod.paywat.com/login")
        cy.fixture('paywatlogin.json').then((credintials)=>{
            const ln=new LoginUi();
            ln.setUserName(credintials.usernameGA)
            ln.setPassWord(credintials.passwordGA)
            ln.clickLoginButton();
            ln.verifyLogin();
    })
        
    })
})