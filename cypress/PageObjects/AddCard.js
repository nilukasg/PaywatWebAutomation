class AddCard{

    textCardNumber ="#react > input.card-number-input.css-sw4iph.invalid.empty.touched";
    textExpiryDate ="//input[@type='tel' and contains(@class, 'css-sw4iph') and @placeholder='MM / YY']";
    textCVV = "//input[@type='password' and contains(@class, 'css-sw4iph') and @placeholder='CVC']";
    textCardHolder ="//input[@type='text' and contains(@class, 'css-sw4iph') and @placeholder='Card holder']";
    textNickName = "//input[@type='text' and contains(@class, 'add-new-card-form-field') and @placeholder='Nick Name']";
    textStreet = "#feedScrollBar > div.item-Payment-Card-List-main-container > div.add-card > div > div > form > input.add-new-card-custom-field-left.add-new-card-form-field.jss413";
    textCity ="#feedScrollBar > div.item-Payment-Card-List-main-container > div.add-card > div > div > form > input:nth-child(7)";
    btnState ="#demo-simple-select-outlined";

    textZipCode = "";
    btnLinkCard ="#feedScrollBar > div.item-Payment-Card-List-main-container > div.add-card > div > div > form > button.add-new-card-form-button-disable";

    btnAddNew = "#feedScrollBar > div.item-Payment-Card-List-main-container > div.card-list-main-container > div.MuiPaper-root.MuiCard-root.card-list-container.MuiPaper-elevation1.MuiPaper-rounded > div > div > div:nth-child(4) > div";
    
    setCardNumber(cardnumber){
        cy.get(this.textCardNumber).type(cardnumber);
    }
    setExpiryDate(ExpiryDate){
        cy.get(this.textExpiryDate).type(ExpiryDate);
    }
    setCVV(CVV){
        cy.get(this.textCVV).type(CVV);
    }
    setCardHolder(CardHolder){
        cy.get(this.textCardHolder).type(CardHolder);
    }
    setNickName(NickName){
        cy.get(this.textNickName).type(NickName);
    }

    setStreet(Street){
        cy.get(this.textStreet).type(Street);
    }

    setCardHolder(CardHolder){
        cy.get(this.textCity).type(CardHolder);
    }

    setState(State){
        cy.get(this.btnState).type(State);
    }

    setZipCode(ZipCode){
        cy.get(this.textZipCode).type(ZipCode);
    }

}
export default AddCard;
