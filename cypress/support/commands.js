Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Kaique')
    cy.get('#lastName').type('Lopes')
    cy.get('#email').type('kaique@email.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})