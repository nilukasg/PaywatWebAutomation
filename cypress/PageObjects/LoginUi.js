class LoginUi{

    txtLogo = ".w-256";
    txtDescription = ".font-800";
    txtLogInToAcc = ".MuiCardContent-root > .MuiTypography-root";
    txtEmailField=".mb-16 > .MuiInputBase-root > .MuiInputBase-input";
    txtPWField=".mb-8 > .MuiInputBase-root > .MuiInputBase-input";
    txtLoginButton=".font-medium";
    txtForgotPW =".font-medium";
    txtTerms=".justify-right > span > a";
    txtPrivacyPolicy =".justify-left > span > a";
    txtSubDescription =".flex-grow-0 > .mt-32";
    txtCpoyRight ='[style="position: fixed; bottom: 40px; font-size: 16px; font-weight: 400;"]';


    txtUserName ="input[name='email']";
    txtPassWord = "input[name='password']";
    btnLogin = "button[value='legacy']";
    lblMsg = ".profile-name";

    verifyLogo(){
        cy.get(this.txtLogo).should('be.visible')
    }
    verifyDescription(){
        cy.get(this.txtDescription).should('be.visible')
    }
    verifyEmailFiled(){
        cy.get(this.txtEmailField).should('be.visible')
    }
    verifyPWField(){
        cy.get(this.txtPWField).should('be.visible')
    }
    verifyLoginButton(){
        cy.get(this.txtLoginButton).should('be.visible')
    }
    verifyForgotPWLinkText(){
        cy.get(this.txtForgotPW).should('be.visible')
    }
    verifyTerms(){
        cy.get(this.txtTerms).should('be.visible')
    }
    verifyPrivacyPolicyText(){
        cy.get(this.txtPrivacyPolicy).should('be.visible')
    }
    verifyCopyRightText(){
        cy.get(this.txtCpoyRight).should('be.visible')
    }

    setUserName(username){
        cy.get(this.txtUserName).type(username);
    }
    setPassWord(password){
        cy.get(this.txtPassWord).type(password);
    }  
    clickLoginButton()  {
        cy.get(this.btnLogin).click();
    }
    verifyLogin()  {
        cy.get(this.lblMsg).should("have.text","Dileep Rajapaksha");
    }

}
export default LoginUi;