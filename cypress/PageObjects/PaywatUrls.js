class PaywatUrls {

    thirdPartyUrl = "https://preprod.paywat.com/thirdparty/redirect?hid=d5d674fcc64006a9396da51d82ae4cc006d0f29ac894403dd1358193e7dd114d&flow=items";

    loginAsParent() {
        cy.visit('thirdPartyUrl');
    }
    loadParentCredentials() {
        return cy.fixture('paywatlogin.json');
    }

    loginAsGlobalAdmin() {
        cy.visit("paywatUrl");
    }
    loadCredentials() {
        return cy.fixture('paywatlogin.json');
    }

    
}
export default PaywatUrls;


// class YourPage {
//     visitWebsite() {
//         cy.visit("URL");
//     }

//     loadCredentials() {
//         return cy.fixture('paywatlogin.json');
//     }
// }

// export default YourPage;