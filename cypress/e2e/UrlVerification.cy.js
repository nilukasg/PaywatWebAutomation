

describe('Url Verification', () => {
    it('assertion demo', () => {
        // cy.visit("https://preprod.paywat.com/login")
        // cy.url().should('include','preprod.paywat.com')
        // cy.url().should('eq','https://preprod.paywat.com/login')
        // cy.url().should('contain','login')


        // cy.visit("https://preprod.paywat.com/login")
        // cy.url().should('include','preprod.paywat.com')
        // .should('eq','https://preprod.paywat.com/login')
        // .should('contain','login')



        cy.visit("https://preprod.paywat.com/login")
        cy.url().should('include','preprod.paywat.com')
        .and('eq','https://preprod.paywat.com/login')
        .and('contain','login')
        .and('not.contain','dev')
 

        cy.title().should('include','PayWat')
        .and('eq','PayWat - Web Admin')
        .and('contain','Web Admin')



        cy.get('.w-256').should('be.visible')
        cy.get('.font-800').should('exist')
        cy.get('.MuiCardContent-root > .MuiTypography-root').should('be.visible')
        cy.get('.mb-16 > .MuiInputBase-root > .MuiInputBase-input').should('be.visible')
        cy.get('.mb-8 > .MuiInputBase-root > .MuiInputBase-input').should('be.visible')
        cy.get('.font-medium').should('be.visible')
        cy.get('.font-medium').should('be.visible')
        cy.get('.justify-right > span > a').should('be.visible')
        cy.get('.flex-grow-0 > .mt-32').should('be.visible')
        cy.get('[style="position: fixed; bottom: 40px; font-size: 16px; font-weight: 400;"]').should('be.visible')
    })



    it('verify valid login', () => {
        cy.visit("https://preprod.paywat.com/login")
        cy.get("input[name='email']").type("dileep.rajapaksha@schoolgrove.com")
        cy.get("input[name='password']").type("Paywat!123")
        cy.get("button[value='legacy']").click()
      

        let expName="Dileep Rajapaksha";
       
        cy.get('.profile-name').then( (userName)=> {

            let actName=userName.text()
            expect(actName).to.equal(expName) //BDD assertion

            assert.equal(actName,expName) //TDD assertion
        })

        // cy.get('.MuiIconButton-label-160 > .material-icons').click()

        // cy.get("input[name='email']").type("197700.lumensupport@lumentouch.com")
        // cy.get("input[name='password']").type("s@aeyH3n")
        //cy.get("button[value='legacy']").click()
        // cy.get("button[class='MuiButtonBase-root MuiButton-root MuiButton-text item-list-empty-meal-button'] span[class='MuiButton-label']").click()
        // cy.get(".item-list-header-title").contains("Select Item")
        // cy.title(".item-list-header-title").should('eq','Select Item')

        // cy.get("button[class='MuiButtonBase-root MuiButton-root MuiButton-text item-list-empty-meal-button'] span[class='MuiButton-label']").click()
        // cy.title(".account-balance-top-up-main-title").should('eq','Top Up Meal Balances')
        // cy.get(".account-balance-top-up-main-title").contains("Top Up Meal Balances")
    })

}) 