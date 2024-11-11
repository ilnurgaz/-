describe('Advanced', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('.oxd-button--main').click();
    cy.url().should('include', '/dashboard');
  });

  it('Проверка адаптации меню', () => {
    cy.viewport(1280, 720);
    cy.get('.oxd-navbar-nav').should('be.visible');

    cy.viewport(800, 600); 
    cy.get('.oxd-navbar-nav').should('be.visible'); 

    cy.viewport(320, 480);
    cy.get('.oxd-navbar-nav').should('not.be.visible');
    cy.get('.oxd-topbar-header-hamburger').should('be.visible').click();
    cy.get('.oxd-navbar-nav').should('be.visible');
  });

  it('Проверка статуса ответа', () => {
    cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })

});

