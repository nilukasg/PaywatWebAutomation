class LeftMenu{

    menuIcon = "#fuse-toolbar > div > button > span > span";
    linkOrganizations = "body > div.MuiDrawer-root-141.MuiDrawer-modal-152 > div.MuiPaper-root-199.MuiDrawer-paper-143.jss8.MuiDrawer-paperAnchorLeft-144.MuiPaper-elevation16-218 > div > div.relative.fixed > div > ul > a.MuiButtonBase-root-325.MuiListItem-root-341.jss339.jss340.list-item.MuiListItem-gutters-346.MuiListItem-button-347 > div > span";
    btnSelectAll = "";
   
   
    clickMenuIcon()  {
        cy.get(this.menuIcon).click();
    }
    clickOrganizations()  {
        cy.get(this.linkOrganizations).click();
        cy.wait(1000)
    }

}
export default LeftMenu;