describe('South America game', () => {
  beforeEach(() => {
    cy.intercept('https://latitude-longitude-bingo-api.herokuapp.com/api/v1/countries').as('fetch-countries')
    cy.visit('http://localhost:3000/');
    cy.get('.Home--link').contains('South America').click();
    cy.wait('@fetch-countries');
  })
  it('should display a bingo grid', () => {
    cy.get('.board');
    cy.get('.square').should('have.length', 16)
  })
  it('should have an active nav-link for the current region', () => {
    cy.get('.nav-link').contains('South America').should('have.class', 'active')
  })
  it('should have an area for displaying coordinates', () => {
    cy.get('.coordinates').contains('N/S');
    cy.get('.coordinates').contains('E/W');
    cy.get('.coordinates').contains('Get Coordinates');
  })
  it('should prevent a player from getting coordinates until the game board is set', () => {
    cy.get('.next-btn').should('be.disabled');
  })
  it('should have a button for setting the game board', () => {
    cy.get('.bingo-btn').contains('Set Game Board!');
  })
  it('should have a map displaying the region', () => {
    cy.get('.leaflet-container')
  })
  it('should let the user zoom in and out of the map', () => {
    cy.get('.leaflet-control-zoom-in').click();
    cy.get('.leaflet-control-zoom-out').click();
  })
  it('should be able to populate the game board with coordinates', () => {
    cy.get('.bingo-btn').click();
    cy.get('.square').contains('Peru')
    cy.get('.square').contains('Guyana')
    cy.get('.square').contains('Chile')
    cy.get('.square').contains('French Guiana')
    cy.get('.square').contains('Paraguay')
    cy.get('.square').contains('Argentina')
    cy.get('.square').contains('Uruguay')
    cy.get('.square').contains('Brazil')
  })
  it('should be able to serve up a pair of coordinates', () => {
    cy.get('.bingo-btn').click();
    cy.get('.next-btn').click();
    cy.get('h3').contains(/S|N/)
    cy.get('h3').next().contains(/E|W/)
  })
  it('should be able to keep track of which bingo squares a user has clicked', () => {
    cy.get('.bingo-btn').click();
    cy.get('.square').contains('Peru').click();
    cy.get('.square').contains('Guyana').parent().should('not.have.class', 'true');
    cy.get('.square').contains('Peru').parent().should('have.class', 'true')
  })
  it('should be able to declare a bingo', () => {
    cy.get('.bingo-btn').click();
    for (let i = 0; i < 16; i++){
      cy.get('.next-btn').click();
    }
    cy.get('.square').click({multiple: true});
    cy.get('.bingo-btn').click();
    cy.get('.square').contains('Peru').parent().should('have.class', 'correct-true');
    cy.get('.square').contains('Guyana').parent().should('have.class', 'correct-true');
    cy.get('.square').contains('Paraguay').parent().should('have.class', 'correct-true');
    cy.get('.modal-content').contains('BINGO!')
  })
  it('should be able to display an error if the user selects uncalled countries', () => {
    cy.get('.bingo-btn').click();
    cy.get('.square').click({multiple: true});
    cy.get('.bingo-btn').click();
    cy.get('.modal-content').contains('Oops')
  })
  it('should be able to display an error if the user incorrectly declares bingo', () => {
    cy.get('.bingo-btn').click();
    cy.get('.square').contains('Peru').click();
    cy.get('.square').contains('Argentina').click();
    cy.get('.square').contains('Chile').click();
    cy.get('.bingo-btn').click();
    cy.get('.modal-content').contains('Keep playing')
  })
  it('should show a modal when the player runs out of coordinates', () => {
    cy.get('.bingo-btn').click();
    for (let i = 0; i < 17; i++){
      cy.get('.next-btn').click();
    }
    cy.get('.modal-content').contains('That\'s all the countries for this region! Please play again!')
  })
  it('should let a player close the modal', () => {
    cy.get('.bingo-btn').click();
    for (let i = 0; i < 17; i++){
      cy.get('.next-btn').click();
    }
    cy.get('.close-btn').click();
    cy.get('.modal-content').should('not.exist')
  })
})
