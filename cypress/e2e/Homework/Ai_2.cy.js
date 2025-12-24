describe('submitCustomerCareForm for Valley National Bank', () => {
    it('fill out the customer care form', () => {
    //visit Valley National Bank homepage
    cy.visit('https://www.valley.com/');
    //click on customer care link
    cy.get('[viewBox="0 0 512 512"]').click();
    //navigate to the "Need to speak to someone?" secrtion of the page
    cy.get('[id=00N2K00000CWxRU]').scrollIntoView();
    //enter a name in "First Name" field
    cy.get('[id=00N2K00000CWxRU]').type('John');
    //enter a last name in "Last Name" field
    cy.get('[id=00N2K00000CWxRh]').type('Doe');
    //enter an email in "Email" field
    cy.get('[id=email]').type('john.doe@example.com');
    //enter a phone number in "Phone" field
    cy.get('[id=phone]').type('1234567890');
    //select an option from "Reason for Contact" dropdown
    cy.get('[id=00N2K00000EBDef]').select('Online Banking');
    //enter a message in "Message" field
    cy.get('[id=description]').type('This is a test message for customer care form submission.');
    //click on the "Submit" button
    //cy.get('[name=submit]').click();
    });
});//end of test