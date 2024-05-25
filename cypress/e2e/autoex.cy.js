describe('E2E Automation Test', () => {
  it('should complete the full user journey', () => {
  
    cy.visit('http://automationexercise.com');

    cy.get('body').should('be.visible');

   
    cy.get('.product').first().find('.add-to-cart').click();
    cy.get('.modal-footer .btn-success').click(); 

   
    cy.get('.navbar-nav').contains('Cart').click();

   
    cy.url().should('include', '/view_cart');
    cy.get('.cart_description').should('be.visible');

    
    cy.contains('Proceed To Checkout').click();

    
    cy.contains('Register / Login').click();

    
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('button[type="submit"]').contains('Signup').click();

    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="first_name"]').type('Test');
    cy.get('input[name="last_name"]').type('User');
    cy.get('input[name="address"]').type('123 Test Street');
    cy.get('input[name="city"]').type('Test City');
    cy.get('select[name="country"]').select('United States');
    cy.get('input[name="state"]').type('Test State');
    cy.get('input[name="zipcode"]').type('12345');
    cy.get('input[name="mobile_number"]').type('1234567890');
    cy.get('button[type="submit"]').contains('Create Account').click();

   
    cy.contains('ACCOUNT CREATED!').should('be.visible');
    cy.get('.btn-primary').contains('Continue').click();

   
    cy.contains('Logged in as Test User').should('be.visible');

   
    cy.get('.navbar-nav').contains('Cart').click();

    
    cy.contains('Proceed To Checkout').click();

   
    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

    
    cy.get('textarea[name="message"]').type('Please deliver between 10 AM and 5 PM');
    cy.contains('Place Order').click();

    
    cy.get('input[name="name_on_card"]').type('Test User');
    cy.get('input[name="card_number"]').type('4111111111111111');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type('2025');

  
    cy.contains('Pay and Confirm Order').click();

    
    cy.contains('Your order has been placed successfully!').should('be.visible');
  });
});