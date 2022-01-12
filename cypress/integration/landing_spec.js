describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should display a header', () => {
    cy.get('.Home--header').contains('-Latitude-')
    cy.get('.Home--header').contains('|Longitude|')
    cy.get('.Home--header__bold').contains('BINGO')
  })
  it('should contain a welcome message', () => {
    cy.get('h3').contains('Please choose a region to get started!')
  })
  it('should contain links to all game regions', () => {
    cy.get('.Home--link').should('have.length', 7)
    cy.get('.Home--link').should('contain', 'Africa')
    cy.get('.Home--link').should('contain', 'Asia')
    cy.get('.Home--link').should('contain', 'Australia & Oceania')
    cy.get('.Home--link').should('contain', 'Europe')
    cy.get('.Home--link').should('contain', 'North America')
    cy.get('.Home--link').should('contain', 'South America')
    cy.get('.Home--link').should('contain', 'World')
  })
  it('should contain a world-map image', () => {
    cy.get('.Home--continents')
  })
})
