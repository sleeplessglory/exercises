describe('fundamentals test', () => { //the string parameter describes the test, the () => executes it
  it('passes', () => { //"it" block is used for single tests within an overall test file (similar to "describe" block)
    cy.visit('https://example.cypress.io')
  })
})