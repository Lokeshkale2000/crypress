describe('handle tabs', (() => {
    
    it("approarch 1", () => {


        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click();
        cy.url().should(
          "include",
          "https://the-internet.herokuapp.com/windows/new"
        );
        cy.wait(5000);
        cy.go('back');
    })
        
    it("approarch 2", () => {
      cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get('.example >a').then((e) => {
            let url = e.prop('href');
            cy.visit(url)
             cy.url().should(
               "include",
               "https://the-internet.herokuapp.com/windows/new"
             );
             cy.wait(5000);
             cy.go("back");
     })
    });



}))