describe('Dashboard', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('.oxd-button--main').click();
    cy.url().should('include', '/dashboard');
  });

  it('Dashboard', () => {
    cy.get('li[data-v-6475d26d]').eq(7).click();

    cy.get('div[data-v-c93bdbf3]').should('have.length', 7);

    cy.get('li[data-v-6475d26d]').eq(3).click();

    cy.get('input[data-v-75e744cd]').eq(0).type('user');

    cy.get('[data-v-3ebc98ba]').contains('manda akhil user').click();

    cy.get('button[data-v-10d463b7]').eq(0).click();
    
    cy.get('form[data-v-d5bfe35b]').should('have.length', 1);
    
    

    cy.get('li[data-v-6475d26d]').eq(3).click();

    cy.get('input[data-v-75e744cd]').eq(0).type('jo');

    cy.get('[data-v-3ebc98ba]').contains('John Doe').click();

    cy.get('button[data-v-10d463b7]').eq(0).click();
    
    cy.get('.oxd-alert--warn').should('have.length', 1);

    
  });
});
