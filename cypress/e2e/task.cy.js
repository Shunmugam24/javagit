describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[class="btn_primary btn_inventory"]').eq(0).click()
    cy.get('[class="btn_primary btn_inventory"]').eq(1).click()
    cy.get('#shopping_cart_container').click()  
    cy.get('a.btn_action').click()
    cy.get('#first-name').type('shunmugam')
    cy.get('#last-name').type('kee')
    cy.get('#postal-code').type('12345')
    cy.get('input[type="submit"]').click()
    cy.get('div.summary_subtotal_label').should('have.text', 'Item total: $45.98')
})
})