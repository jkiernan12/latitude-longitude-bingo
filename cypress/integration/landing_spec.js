describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should display a header', () => {
    cy.get('h1').contains('-Latitude- |Longitude| BINGO')
  })
  it('should contain a welcome message', () => {
    cy.get('h3').contains('Please choose a region to get started!')
  })
  it('should contain links to all game regions', () => {
    cy.get('.nav-link').should('have.length', 7)
    cy.get('.nav-link').should('contain', 'Africa')
    cy.get('.nav-link').should('contain', 'Asia')
    cy.get('.nav-link').should('contain', 'Australia & Oceania')
    cy.get('.nav-link').should('contain', 'Europe')
    cy.get('.nav-link').should('contain', 'North America')
    cy.get('.nav-link').should('contain', 'South America')
    cy.get('.nav-link').should('contain', 'World')
  })
})
