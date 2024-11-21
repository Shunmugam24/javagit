describe('flipkart search', () => {
  it('flipkart search', () => {
    cy.visit('https://flipkart.com')
    cy.get('.Pke_EE').type('mobiles')
    cy.get('._2iLD__').type('enter')
    cy.get('[title="SAMSUNG"] > .QCKZip > .tJjCVx > .XqNaEv').click()
    cy.get('[data-id="MOBGX2Q7KG25VGKQ"] > .tUxRFH > .CGtC98 > .yKfJKb > .col-7-12 > .KzDlHZ').should('be.visible', 'samsung')
    
  })
})

