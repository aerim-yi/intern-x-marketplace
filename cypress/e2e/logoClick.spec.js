// Click logo should return to collection page 

describe('Clicking into a collection ', () => {
    it('finds the content "type"', () => {

        const testString = "Siwonchoi"

        cy.visit("/");
    
        cy.contains(testString).click();
        cy.contains('Intern X Marketplace').click();
        
        cy.url().should('equal', 'http://localhost:3000/')

      })
    })
    