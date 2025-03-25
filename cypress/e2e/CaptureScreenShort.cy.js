describe('mysuit', () => {
    

    it('Capture screenShot and videos', () => {
        cy.visit("https://demo.opencart.com.gr/");
        /*cy.screenshot("homepage");
        cy.wait(5000);*/
        // Automatically capture screenshot and video on failure -only when execute through  CLI
        cy.get(":nth-child(7) > a").click();
        cy.get('h2').should('have.text', "Tablets");
        
    })
})