describe('Logout', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('reading \'response\'')) {
        return false;
      }
      return true;
    });

    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('.oxd-button--main').click();
  });

  it('Logout', () => {
    cy.get('.oxd-userdropdown-tab').click();
    
    cy.contains('Logout').click();
    
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
});
