describe("CSSlocators", () => {
  it("csslocators", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get("#search_block_top input[name='search_query']").type("T-Shirts"); //id and attribute
    cy.get("[name='submit_search']").click(); //attribute
    cy.get(".lighter").contains("T-Shirts"); //class
  });
});
