
describe('G-Invoicing Dashboard', () => {
  it('Loads the dashboard', () => {
    cy.visit('/dashboard');
    cy.contains('Dashboard');
  });

  it('Can search agreements', () => {
    cy.visit('/dashboard/search');
    cy.get('input').type('Contract A');
    cy.contains('Search').click();
  });
});
