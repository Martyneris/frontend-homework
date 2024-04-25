describe('Complete Purchase Flow', () => {
    it('completes a purchase from package selection to confirmation', () => {
        // Visit the homepage
        cy.visit('http://localhost:3000');

        // Select a package
        cy.contains('Select a Package');
        cy.get('[data-testid="double"]').click();
        cy.contains('Next').click();

        // Try to submit the user information form without entering the information, should return errors
        cy.contains('Next').click();
        cy.contains('First name is required').should('be.visible');
        cy.contains('Last name is required').should('be.visible');
        cy.contains('Please enter a valid email address').should('be.visible');

        // Try to submit the user information with wrong email format, should return error

        cy.get('input[name="firstName"]').type('John');
        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@example.'); // wrong format

        cy.contains('Next').click();
        cy.contains('Please enter a valid email address').should('be.visible');

        // Fill user information form
        cy.get('input[name="firstName"]').clear();
        cy.get('input[name="lastName"]').clear();
        cy.get('input[name="email"]').clear();
        cy.get('input[name="firstName"]').type('John');
        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.contains('Next').click();

        // Review and complete the purchase
        cy.contains('Review your order');
        cy.contains('Complete purchase').click();

        // Verify that success message is visible
        cy.contains('Purchase complete!').should('be.visible');
    });
});
