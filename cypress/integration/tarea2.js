describe("Exercise in Actions Page", () => {


    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })


    it("Exercise 1. Typing and sending keys", () => {
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

            .type('{del}{selectall}{backspace}')
            .should('have.value', '')
            cy.get('.action-disabled')
                .type('Text typed inside disabled textarea', {force: true})
                .should('have.value', 'Text typed inside disabled textarea')
    });

    it("Exercise 2 Part 1 focus on a DOM element", () => {
        cy.get('[id="password1"]')
            .focus()
            .should('have.class', 'focus')
            .prev().should('have.attr', 'style', 'color: orange;')

    });

    it('Exercise 2 Part 2 .blur() - blur off a DOM element', () => {
        // https://on.cypress.io/blur
        cy.get('.action-blur').type('About to blur').blur()
            .should('have.class', 'error')
            .prev().should('have.attr', 'style', 'color: red;')
    })

    it('Exercise 3 .submit() - submit a form', () => {
        // https://on.cypress.io/submit
        cy.get('.action-form')
            .find('[type="text"]').type('ganounpremio')

        cy.get('.action-form').submit()
            .next().should('contain', 'Your form has been submitted!')
    })

    it('Exercise 4.  Popover and canvas and multiple clicks ', () => {
        cy.get('.action-btn')
            .click()

        cy.get('.popover-title')
            .should('contain', 'Popover')

        cy.get('#action-canvas')
        .click(80, 75)
        .click(170, 75)
        .click(80, 165)
        .click(100, 185)
        .click(125, 190)
        .click(150, 185)
        .click(170, 165)

        cy.get('.action-labels>.label').click({ multiple: true })

        cy.get('.action-opacity>.btn').click({ force: true })

    })

    it('Exercise 5. Double click element ', () => {
        cy.get('.action-div').dblclick().should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('Exercise 6. Right click element', () => {
        cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
        cy.get('.rightclick-action-input-hidden').should('be.visible')
    })


});