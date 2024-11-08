describe('Search', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('.oxd-button--main').click();
    cy.url().should('include', '/dashboard');
  });

  it('Search with result', () => {
    const searchText = 'i'; 
    cy.get('.oxd-main-menu-search input').type(searchText);

    cy.get('.oxd-main-menu-item-wrapper')
      .filter(`:contains("${searchText}")`)
      .should('have.length.greaterThan', 0);
  });

  it('Search without result', () => {
    const searchText = 'nonexistenttext';
    cy.get('.oxd-main-menu-search input').type(searchText);
    cy.get('.oxd-main-menu-item-wrapper').should('have.length', 0);
  });
});