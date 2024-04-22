class AddOns{

    textAddOns = "//span[normalize-space()='Add-Ons']";
    labelParentBalance = "#feedScrollBar > div:nth-child(1) > div > div.flex.container.w-full > div > div.jss997.overflow-hidden.jss988 > div.jss569.jss999.flex.ps > div.w-full > div > div:nth-child(2) > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-1 > span > span.MuiButtonBase-root.MuiIconButton-root.jss627.MuiSwitch-switchBase.MuiSwitch-colorSecondary";
    labelItems = "#feedScrollBar > div:nth-child(1) > div > div.flex.container.w-full > div > div.jss997.overflow-hidden.jss988 > div.jss569.jss999.flex.ps > div.w-full > div > div:nth-child(4) > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-1 > span > span.MuiButtonBase-root.MuiIconButton-root.jss627.MuiSwitch-switchBase.MuiSwitch-colorSecondary";
    labelBalances = "#feedScrollBar > div:nth-child(1) > div > div.flex.container.w-full > div > div.jss997.overflow-hidden.jss988 > div.jss569.jss999.flex.ps > div.w-full > div > div.MuiGrid-root.balance-container.MuiGrid-container.MuiGrid-spacing-xs-2 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-1 > span > span.MuiButtonBase-root.MuiIconButton-root.jss627.MuiSwitch-switchBase.MuiSwitch-colorSecondary";

    clickAddOns()  {
        cy.get(this.textAddOns).click();
    }
    clickParentBalance()  {
        cy.get(this.labelParentBalance).click();
        
    }
    clickItems()  {
        cy.get(this.labelItems).click();
        
    }
    clickBalances()  {
        cy.get(this.labelBalances).click();
        
    }
   
}
export default AddOns;