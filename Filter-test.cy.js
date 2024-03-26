//const { describe } = require("mocha");

beforeEach(() => {
  cy.visit('https://stacksinfo.web.app/');
});

describe('Test-Case-Search', () => {
  it('check search at Qa', () => {
    cy.get('.search-bar').type('Qa')
  })
})
