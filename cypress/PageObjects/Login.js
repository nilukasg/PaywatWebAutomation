
  class Login{

    txtUserName ="input[name='email']";
    txtPassWord = "input[name='password']";
    btnLogin = "button[value='legacy']";
    lblMsg = ".profile-name";

    setUserName(username){
        cy.get(this.txtUserName).type(username);
    }
    setPassWord(password){
        cy.get(this.txtPassWord).type(password)
       
    }  
    clickLoginButton()  {
        cy.get(this.btnLogin).click()
        cy.wait(10000);
    }
    verifyLogin()  {
        cy.get(this.lblMsg).should("have.text","Dileep Rajapaksha");
    }

}

export default Login;

// class LoginPage {
//     constructor() {
//         this.yourPage = new YourPage();
//     }

//     login(credentials) {
//         // perform login using provided credentials
//     }
// }
// export default LoginPage;