describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('', () => {
        cy.contains(/testing forms/i)
        //let's get the "data-test" attribute of <div> for Email and then the <input> area of it:
        cy.get('[data-test="subscribe-form"]').find('input').as('subscribe-input') //created an alias "as" to refer to it shorter
        cy.get('@subscribe-input').type("sleeplessglory@outlook.com") //now we refer to it with ('@aliasName')
        cy.contains(/successfully subbed: sleeplessglory@outlook.com/i).should('not.exist')
        cy.get('[data-test="subscribe-button"]').click()
        cy.contains(/successfully subbed: sleeplessglory@outlook.com/i).should('exist')
        cy.wait(3000) //waiting for 3000ms = 3s
        cy.contains(/successfully subbed: sleeplessglory@outlook.com/i).should('not.exist')


        //Let's test unhappy paths:
        cy.get('@subscribe-input').type("sleeplessglory@outlook.idc") //now we refer to it with ('@aliasName')
        cy.contains(/invalid email: sleeplessglory@outlook.idc/i).should('not.exist')
        cy.get('[data-test="subscribe-button"]').click()
        cy.contains(/invalid email: sleeplessglory@outlook.idc/i).should('exist')
        cy.wait(3000)
        cy.contains(/invalid email: sleeplessglory@outlook.idc/i).should('not.exist')
        //Let's leave the email area blank and subscribe:
        cy.contains(/fail!/i).should('not.exist')
        cy.get('[data-test="subscribe-button"]').click() //now we refer to it with ('@aliasName')
        cy.contains(/fail!/i).should('exist')
    })
})