class Timeline{

    verifyTitleTimeline()  {
        cy.get('p').contains('Timeline').should('exist')
    }

}
export default Timeline;