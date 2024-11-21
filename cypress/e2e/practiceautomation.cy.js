describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  // Radio Button
  cy.get('input[value="radio1"]').check().should('be.checked')
  //Checkbox
  cy.get('#checkBoxOption1').check('option1').should('be.checked')
  //Static Dropdown
  cy.get('select').select('option2').should('have.value','option2')
  
  })
})