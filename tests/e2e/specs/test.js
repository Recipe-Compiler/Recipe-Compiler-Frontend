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
    cy.get(':nth-child(1) > .row > .v-btn').click()
    cy.get('.v-card > .v-card__title').should('be.visible')
  })
})

describe('Click login button shows dialog then close button removes dialog', () => {
  it('clicks the login button, clicks the close button', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > .row > .v-btn').click()
    cy.get('.v-card__actions > .v-btn > .v-btn__content').click()
    cy.get('.flex').should('be.visible')
  })
})

describe('Click register button shows dialog', () => {
  it('clicks the register button', () => {
    cy.visit('/')
    cy.get('.ml-2 > .row > .v-btn').click()
    cy.get('.v-card > .v-card__title').should('be.visible')
  })
})

describe('Click register button shows dialog then close button removes dialog', () => {
  it('clicks the register button, clicks the close button', () => {
    cy.visit('/')
    cy.get('.ml-2 > .row > .v-btn > .v-btn__content').click()
    cy.get('.v-card__actions > .v-btn > .v-btn__content').click()
    cy.get('.flex').should('be.visible')
  })
})

describe('Click the third recipe on the carosel navigation', () => {
  it('click third navigation button', () => {
    cy.visit('/')
    cy.get('[value="2"] > .v-btn__content > .v-icon').click()
    cy.get(':nth-child(2) > .v-image > .v-responsive__content').should("be.visible")
  })
})

describe('Clicking explore button routes to explore page', () => {
  it('clicks the explore button', () => {
    cy.visit('/')
    cy.get('.v-toolbar__content > :nth-child(3) > .v-btn__content').click()
    cy.get('.pt-15 > .row > :nth-child(2)').should('be.visible')
  })
})

describe('Clicking mealplan button routes to mealplan page', () => {
  it('clicks the mealplan button', () => {
    cy.visit('/')
    cy.get(':nth-child(4) > .v-btn__content').click()
    cy.get('.v-data-table > .v-sheet > .v-toolbar__content').should('be.visible')
  })
})

describe('Clicking saved button routes to saved page', () => {
  it('clicks the saved button', () => {
    cy.visit('/')
    cy.get(':nth-child(5) > .v-btn__content').click()
    cy.get('h1').contains("Saved Recipes")
  })
})

describe('Clicking searchbar', () => {
  it('clicks the searchbar', () => {
    cy.visit('/')
    cy.get('.v-input__slot').click().type("Harry")
    cy.get('.v-list-item__title').contains("Harry Potter Inspired Drinks")

  })
})

describe('Clicking search result', () => {
  it('clicks the search result', () => {
    cy.visit('/')
    cy.get('.v-input__slot').click().type("Harry")
    cy.get('.v-list-item__title').click()
    cy.get('.v-card__title').contains("Harry Potter Inspired Drinks")
  })
})

describe('Logging in', () => {
  it('Logs into a user account', () => {
    cy.visit('/')
    cy.visit('/')
    cy.get(':nth-child(1) > .row > .v-btn').click()
    cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot').type("austin")
    cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot').type("P@ssword1")
    cy.get('.col > .v-btn > .v-btn__content').click()
    cy.get('.flex').should("be.visible")
  })
})

describe('Account details', () => {
  it('Logs into a user account and checks details', () => {
    cy.visit('/')
    cy.visit('/')
    cy.get(':nth-child(1) > .row > .v-btn').click()
    cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot').type("austin")
    cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot').type("P@ssword1")
    cy.get('.col > .v-btn > .v-btn__content').click()
    cy.get('.flex').should("be.visible")
    cy.get('.mt-3 > .v-btn__content').contains("My Account")
  })
})

describe('Account details page renders', () => {
  it('Logs into a user account and checks details page', () => {
    cy.visit('/')
    cy.visit('/')
    cy.get(':nth-child(1) > .row > .v-btn').click()
    cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot').type("austin")
    cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot').type("P@ssword1")
    cy.get('.col > .v-btn > .v-btn__content').click()
    cy.get('.flex').should("be.visible")
    cy.get('.mt-3 > .v-btn__content').click()
    cy.get('.col > .v-btn > .v-btn__content').contains("Logout")
  })
})

describe('Log out', () => {
  it('Logs into a user account and checks details page then logs out', () => {
    cy.visit('/')
    cy.visit('/')
    cy.get(':nth-child(1) > .row > .v-btn').click()
    cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot').type("austin")
    cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot').type("P@ssword1")
    cy.get('.col > .v-btn > .v-btn__content').click()
    cy.get('.flex').should("be.visible")
    cy.get('.mt-3 > .v-btn__content').click()
    cy.get('.col > .v-btn > .v-btn__content').click()
    cy.get(':nth-child(1) > .row > .v-btn > .v-btn__content').should("be.visible")
    cy.get(':nth-child(1) > .row > .v-btn > .v-btn__content').contains("Login")
  })
})

describe('Hovercard exists', () => {
  it('Finds hovercard on homepage', () => {
    cy.visit('/')
    cy.get('.pt-6 > .row > :nth-child(1)').should("be.visible")
  })
})

describe('Hovercard routes to recipe page', () => {
  it('Finds hovercard on homepage, clicks see more info', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > :nth-child(4) > .v-card__title').trigger('mouseover')
  })
})

describe('load recipe page', () => {
  it('loads recipe page', () => {
    cy.visit('/recipe/1')
  })
})

describe('load recipe page', () => {
  it('loads recipe page', () => {
    cy.visit('/recipe/1')
    cy.get('.v-card__title').contains("Harry Potter Inspired Drinks")
  })
})