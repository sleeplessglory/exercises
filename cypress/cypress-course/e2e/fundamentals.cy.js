describe('fundamentals test', () => { //the string parameter describes the test, the () => executes it
    beforeEach(() => { //so, we don't have to do it in every single test
        cy.visit('/fundamentals') //commented below now
    })
    
    it('passes', () => { //"it" block is used for single tests within an overall test file (similar to "describe" block)
        //cy.visit('http://localhost:3000/fundamentals') //"cy" is a global object to take actions (e.g. ".visit")
        //cy.visit('/') visits the root/base URL
        //cy.visit('/fundamentals') //after adding the "http://localhost:3000" to the cypress.config.js
        //cy.get('[data-test="fundamental-header"]').contains('Testing Fundamentals')

        cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals') //using a custom command instead of the line below
        //cy.get('[data-test="fundamental-header"]').should('contain.text', 'Testing Fundamentals')
    })

    it.only('Accordion works correctly', () => { //".only" executes only this "it" (if you know the rest of the tests already passed)
        //cy.visit('/fundamentals') //after adding the "http://localhost:3000" to the cypress.config.js
        cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
        // "/SOME TEXT/i" means that it checks it as a lowercase everywhere (test will be passed even if capitalised)
        cy.get('[data-test="accordion-item-1"] div[role="button"]').click() //selecting <div> too, so it doesn't click on the contents when closing
        cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
        cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
        cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    })
})