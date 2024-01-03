it('cypress studio test', () => {
   cy.visit("https://practice-automation.com/form-fields/")

   /* ==== Generated with Cypress Studio ==== */
   cy.get('#cookie_action_close_header').click();
   cy.get('[data-cy="name"]').clear('t');
   cy.get('[data-cy="name"]').type('test');
   cy.get('[data-cy="drink2"]').check();
   cy.get('[data-cy="drink3"]').check();
   cy.get('[data-cy="color2"]').check();
   cy.get('[data-cy="siblings"]').select('maybe');
   cy.get('[data-cy="email"]').clear('q');
   cy.get('[data-cy="email"]').type('qa@test.com');
   cy.get('[data-cy="message"]').type('this is a test message');
   cy.get('[data-cy="submit-btn"]').click();
   /* ==== End Cypress Studio ==== */
})

it('hover', ()=> {
   cy.visit('https://practice-automation.com/hover/')

   cy.get('#mouse_over').click();
   cy.get('#mouse_over').should('have.text', 'You did it!');
})

it('ads', () => {
   cy.visit('https://practice-automation.com/ads/')
   cy.wait(5000)
   cy.get('#popmake-1272 > .pum-close').should('be.visible').click();
})
