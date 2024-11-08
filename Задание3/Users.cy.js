describe('Add user', () => {

    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('.oxd-button--main').click();
      cy.url().should('include', '/dashboard');
    });
  
    it('Add user', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
        
        cy.get('[data-v-10d463b7]').eq(2).click();
    
        cy.get('[data-v-13cf171c]').eq(0).click();  
        cy.get('[data-v-13cf171c]').eq(0).find('.oxd-select-dropdown').contains('Admin').click(); 
    
        cy.get('[data-v-75e744cd] input').type('James Butler'); 
      
        cy.get('[data-v-3ebc98ba]').contains('James Butler').click();
  
        cy.get('[data-v-13cf171c]').eq(2).click();  
        cy.get('[data-v-13cf171c]').eq(2).find('.oxd-select-dropdown').contains('Enabled').click();  
    
        cy.get('[data-v-1f99f73c]').eq(1).type('johndanny2');
    
        cy.get('[data-v-1f99f73c]').eq(2).type('password123'); 
    
        cy.get('[data-v-1f99f73c]').eq(3).type('password123');
    
        cy.get('[data-v-10d463b7]').eq(1).click();
        
        cy.get('.oxd-toast--success').should('be.visible').and('contain.text', 'Successfully Saved');
      
  })
});
