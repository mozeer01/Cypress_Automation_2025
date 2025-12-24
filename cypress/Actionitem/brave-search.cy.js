
//describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {

it('Search for a keyword and verify the search url contains the keyword', () => {;
    //visit brave search homepage
    cy.visit('https://search.brave.com/');
    //type cypress testing in your search field
    cy.get('[id=searchbox]').type('Cypress testing{enter}');

    
    // capture the current url and verify it contains Cypress+testing
    cy.url().should('contain', 'Cypress+testing');

   cy.wait(3000); // wait for 3 seconds before capturing the URL

  //clicks on more button and verifies additional content is shown'
        cy.get('[id=llm-show-more-button]').click();

        //verify the text contains Cypress is a modern, open-srource end-to-end (E2E) testing framework
        cy.get('[id=results]').invoke('text').then((results) => {
            expect(results).to.contain('Cypress is a modern, open-source end-to-end (E2E) testing framework');
        });

    });//end of test 

});//end of describe suite