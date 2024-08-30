describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })
    it('multi-page testing', () => {
        //Within Cypress window we'll click to navigate to other pages (multi-page testing)
        //Create and assign attributes to grab those elements (head to "NavBar.jsx" and "NavItem.jsx")
        cy.get('[ref-attr="nav-why-cypress"]').click(); //Referring to the attribute in "NavItem.jsx"
        cy.location("pathname").should("equal", "/") //"pathname" is what written in the URL of the page

        cy.get('[ref-attr="nav-overview"]').click(); //Referring to the attribute in "NavItem.jsx"
        cy.location("pathname").should("equal", "/overview")

        cy.get('[ref-attr="nav-fundamentals"]').click(); //Referring to the attribute in "NavItem.jsx"
        cy.location("pathname").should("equal", "/fundamentals")

        cy.get('[ref-attr="nav-forms"]').click(); //Referring to the attribute in "NavItem.jsx"
        cy.location("pathname").should("equal", "/forms")

        cy.get('[ref-attr="nav-examples"]').click(); //Referring to the attribute in "NavItem.jsx"
        cy.location("pathname").should("equal", "/examples")
    })
    //components/PostButton directory
    it('intercepts', () => {
        //"intercept"'s 1st argument is the method used: POST, GET, PUT, DELETE, PATCH, etc.
        //the 2nd argument is the URL we're gonna intercept
        //the 3rd argument is what we wanna use as a response 
        cy.intercept("POST", 'http://localhost:3000/examples', {
            body: { //body of the response
                message: "successfully intercepted request" //what we wanna use as a response
                //message's shown in console since we typed to do so in "PostButton.jsx" file
            }
        })
        cy.get('[ref-attr="post-button"]').click() //message's shown within the "data" object

        cy.intercept("POST", 'http://localhost:3000/examples', {
            //The mocked data will be returned:
            fixture: 'example.json' //from "fixtures" folder created by Cypress
        })
        cy.get('[ref-attr="post-button"]').click()
    })
    it.only('grudges', () => {
        cy.contains(/add some grudges/i)
        cy.get('[test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 0) //no <li> items before we start
        })

        cy.get('[test="clear-button"]').should('not.exist')

        cy.get('[test="grudge-list-title"]').should('have.text', 'Add Some Grudges')

        cy.get('[ref-attr="grudge-input"]').within(() => { //".within()" helps to access children elements
            cy.get('input').type('some grudge example')
            //thanks to "within()", above it won't grab other <input> elements that may exist on the page
        })
        cy.get('[ref-attr="add-grudge-button"]').click()
        cy.get('[test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 1) //1 <li> item has to be added after clicking
        })

        cy.get('[test="grudge-list-title"]').should('have.text', 'Grudges')

        cy.get('[ref-attr="grudge-input"]').within(() => {
            cy.get('input').type('another grudge example')
        })  
        cy.get('[ref-attr="add-grudge-button"]').click()
        cy.get('[test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 2) //2 <li> item has to be over there after clicking
            cy.get('li').its(1).should('contain.text', 'another grudge example') //"its(1)" means the index=1 array/list element
        })

        cy.get('[test="grudge-list"]').within(() => {
            cy.get('li').its(0).within(() => {
                cy.get('button').click() //clicking on "X" will remove the list item with index = 0
            })
        })
        cy.get('[test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 1)
        })

        cy.get('[test="clear-button"]').click() //saying it exists (otherwise won't click on it)
    
        cy.get('[test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 0)
        })
    })
})
//cy.wait("@users").its("response.body.results").invoke("slice", 0, 5)
//results is e.g. an array, so, we can invole "slice" method and grab those [0-4] index values 
//Remember to hover over the elements on the page and check 
//the console of the browser for better referencing experience