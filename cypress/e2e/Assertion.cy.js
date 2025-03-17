describe("Assertion demo", () => {
  it("implicit assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placehoder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    let expName = "xzy";

    cy.get(".oxd-userdropdown-name").then((x)=> {


      let actName = x.text()
      
      expect(actName).to.equal(expName)
      expect(actName).to.noual(expName);

    });
  });
});
