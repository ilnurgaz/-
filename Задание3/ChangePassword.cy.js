describe('Change Password', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('.oxd-button--main').click();
    cy.url().should('include', '/dashboard');  
  });

  it('Change Password - Successful Update', () => {
    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Change Password').click();

    cy.get('input[data-v-1f99f73c]').eq(1).type('admin123');  
    cy.get('input[data-v-1f99f73c]').eq(2).type('newStrongPassword123'); 
    cy.get('input[data-v-1f99f73c]').eq(3).type('newStrongPassword123');  

    cy.contains('button', 'Save').click();

    cy.wait(2000); 

    cy.get('.oxd-toast--success').should('be.visible').and('contain.text', 'Successfully Saved');
  });

  it('Change Password - Incorrect Current Password', () => {
    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Change Password').click();

    cy.get('input[data-v-1f99f73c]').eq(1).type('wrongPassword123');  
    cy.get('input[data-v-1f99f73c]').eq(2).type('newStrongPassword123'); 
    cy.get('input[data-v-1f99f73c]').eq(3).type('newStrongPassword123'); 

    cy.contains('button', 'Save').click();

    cy.wait(2000);

    cy.get('.oxd-toast--error').should('be.visible').and('contain.text', 'Current Password is Incorrect');
  });
});
