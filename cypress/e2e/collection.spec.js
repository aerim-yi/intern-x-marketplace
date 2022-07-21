// Test for clicking collection item from home page 

describe('Clicking into a collection ', () => {
it('finds the content "type"', () => {
    cy.visit("http://localhost:3000");

    cy.contains('No Way Back IV Collection').click();
    cy.url().should('include', '/collection/0x47edfa00d13277a6b333e9020d90b22507315ca6')

    cy.get('[data-test-id="CollectionItem_Name"]').contains('Remote Dragon')
  })
})

// Click logo go back to collection page 

// Going through all collection cards re. Chanel (check everything is clickable)
  // What's the point of this? Are you just testing a for loop? Don't get how 
  // to capture potential errors. 

// Buy button click trigger UI pop-up      
