describe('South America game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.nav-link').contains('South America').click()
  })
  it('should display a bingo grid', () => {
    cy.get('.board')
  })
  it('should have an area for displaying coordinates', () => {
    cy.get('.coordinates').contains('N/S');
    cy.get('.coordinates').contains('E/W');
    cy.get('.coordinates').contains('Get Coordinates');
  })
  it('should have a button for setting the game board', () => {
    cy.get('.bingo-btn').contains('Set Game Board!');
  })
  it('should have a map displaying the region', () => {
    cy.get('.leaflet-container')
  })
})
