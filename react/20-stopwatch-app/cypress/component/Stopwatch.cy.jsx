import Stopwatch from '/src/Stopwatch.jsx'

describe('Stopwatch.cy.jsx', () => {
  it('Stopwatch section', () => {
    cy.mount(<Stopwatch />)
  })
})