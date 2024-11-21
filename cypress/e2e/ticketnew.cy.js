describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ticketnew.com/')
    cy.get('input.AnimatedSearchBar_animInput__iuqxe').type('Chennai')
    cy.get('.MobileMovieCitySelector_searchedArea__6TJSO > div').click()
    cy.get(':nth-child(3) > .H5RunningMovieV2_runningMovie__3_RWh > .H5RunningMovieV2_movieDetails__Zr5lP > .H5RunningMovieV2_movieName__vbyu_').click()
    cy.get('.Button_btn___t8GZ').click()
    cy.get(':nth-child(13) > .MovieSessionsListing_col2__2vcaY > :nth-child(3) > .greenCol').click()
    cy.get(':nth-child(7) > .FixedSeating_seatL___joUf > :nth-child(15) > .available > label').click()
    cy.get(':nth-child(7) > .FixedSeating_seatL___joUf > :nth-child(16) > .available > label').click()
  })
})