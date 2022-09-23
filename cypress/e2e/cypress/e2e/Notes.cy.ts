describe('Notes view', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.findByText(/login/i).should('exist')
        cy.findByText(/login/i).click().type('teacher@studybuddy.com')
        cy.findByText(/password/i)
            .click()
            .type('Test123')
        cy.findByText(/sign in/i).click()

        cy.findByText(/logged as/i).should('exist')
    })

    it('Allows to create a new note and delete it', () => {
        cy.visit('http://localhost:3000/notes')
        cy.findByText(/title/i).click().type('My test note')
        cy.findByText(/content/i)
            .click()
            .type('Lorem ipsum dolor sit sit sit')
        cy.findByText(/add/i).click()
        cy.findAllByText(/My test note/i).should('exist')
        cy.findAllByText(/Lorem ipsum dolor sit sit sit/i).should('exist')
        // cy.findAllByLabelText(/delete/i).click({multiple: true}) - click all btns
        cy.findAllByText(/My test note/i).first().parent().findByLabelText(/delete/i).click() // its because our btn is brother for note (file: Note.tsx)
        cy.findAllByText(/My test note/i).should('not.exist')
    })
})
