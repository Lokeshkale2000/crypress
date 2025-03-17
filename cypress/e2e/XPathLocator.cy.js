
const { it } = require("mocha");
describe("Xpath", () => {
  it("find no of products", () => {
    cy.visit(
      "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
    );
    cy.xpath("//ul[@class='product_list grid row']/li").should(
      "have.length",
      7
    ); // Corrected assertion
  });
});
