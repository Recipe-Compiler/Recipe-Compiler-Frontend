// https://docs.cypress.io/api/introduction/api.html

describe('Homepage shows toolbar', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('.v-toolbar__content')
  })
})
describe('Click login button shows dialog', () => {
  it('clicks the login button', () => {
    cy.visit('/')
    cy.get('.v-toolbar__content > :nth-child(10)').click()
    cy.get('#input-36').should('be.visible')
  })
})