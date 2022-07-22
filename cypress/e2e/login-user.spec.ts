/// <reference types="cypress" />

describe('Intern marketplace', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should have a connect wallet button', () => {
        cy.get('.btn-outline-info').contains('Connect Wallet').should('exist');
    })

    it('should login user', () => {
        cy.get('.btn-outline-info').contains('Connect Wallet').click();

    })
})

