// Test for clicking collection item from home page 

describe('Clicking into a collection ', () => {
it('finds the content "type"', () => {
    cy.visit("/");

    cy.contains('No Way Back IV Collection').click();
    cy.url().should('include', '/collection/0x47edfa00d13277a6b333e9020d90b22507315ca6')

    cy.get('[data-testid="CollectionItem_Name"]').contains('Remote Dragon')
  })
})
