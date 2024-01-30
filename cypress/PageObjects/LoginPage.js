class Login{

    setUrl(url){
        cy.visit("https://preprod.paywat.com/login");
    }
    setUserName(username){
        cy.get("input[name='email']").type(username);
    }
    setPassWord(password){
        cy.get("input[name='password']").type(password);
    }  
    clickLoginButton()  {
        cy.get("button[value='legacy']").click();
    }
    verifyLogin()  {
        cy.get('.profile-name').should("have.text","Dileep Rajapaksha");
    }

}

export default Login;