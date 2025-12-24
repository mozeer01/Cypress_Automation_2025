describe('usps tracking number', () => {
    it('enter an invalid tracking number and verify the error message', () => {
    //visit usps homepage
    cy.visit('https://www.usps.com/');
    //hover on quick tools
    cy.get('[class="nav-first-element menuitem"]').realHover();
    //click on track a package
    cy.get('[alt="Tracking Icon"]').click();
    //catpure the url and verify it contains tracking
    cy.url().should('contain', 'Track');
    cy.origin('https://tools.usps.com', () => {
    //enter invalid tracking number
    cy.get('[id="tracking-input"]').click().type('1234567890');
    //click on track button
    cy.get('[class="col-sm-2 track-btn-ctn"]').click();
    //verify the error message
    cy.get('[class="banner-content"]').invoke('text').then((errorMessage) => {
        expect(errorMessage).to.contain('Tracking is not available for this item. This may be because the tracking number is invalid; USPS has not yet received payment; USPS has not yet received the item; the item does not include tracking; or other reasons');
    
    });
    });//end of origin

    });//end of test

});//end of describe suite