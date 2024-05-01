class PaymentLists{

    verifyTitlePaymentLists()  {
        cy.get('p').contains('Payment Lists').should('exist')
    }


}
export default PaymentLists;
