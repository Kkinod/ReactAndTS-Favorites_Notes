describe('empty spec', () => {
    it('Renders unauthenticated app', () => {
        cy.visit('http://localhost:3000/')
        cy.findByText(/login/i).should('exist')
    })

    it('Allows user to authenticate', () => {
        cy.visit('http://localhost:3000/')
        cy.findByText(/login/i).should('exist')
        cy.findByText(/login/i).click().type('teacher@studybuddy.com')
        cy.findByText(/password/i)
            .click()
            .type('Test123')
        cy.findByText(/sign in/i).click()

        cy.findByText(/logged as/i).should('exist')
    })
})
