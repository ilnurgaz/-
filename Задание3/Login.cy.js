describe('Login', () => {

  beforeEach(() => {
    cy.clearCookies();
  });

  it('Fail login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.get('input[name="username"]').type('InvalidUser');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('.oxd-button--main').click();
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });

  it('Succes login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('.oxd-button--main').click();
    cy.url().should('include', '/dashboard');
  });

});