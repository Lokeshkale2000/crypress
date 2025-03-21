describe("Assertion demo", () => {
  it("implicit assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // and should
    // 1 way of wiriting code 
    cy.url().should('include', 'orangehrmlive.com')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('contain', 'orangehrm')
    
    // 2 way of wiriting of code

      cy.url().should("include", "orangehrmlive.com").should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    ).should("contain", "orangehrm");
    


    // 3 way of wiriting of code
     cy.url()
       .should("include", "orangehrmlive.com")
       .and(
         "eq",
         "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
       )
       .and("contain", "orangehrm");
  });
});
// explicit assertion
describe("Assertion demo", () => {
  it("explicit assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    let expName = "manda1 user";

    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();

      expect(actName).to.equal(expName);
      expect(actName).to.not.equal(expName);
    });
  });
});
