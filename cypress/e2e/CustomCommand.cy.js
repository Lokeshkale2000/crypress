// click on link label
// over writing existing contians() cammand
// re-usuable custom command
describe('Custom commands', () => {
    it("handling links", () => {
       cy.visit("https://demo.nopcommerce.com/", { failOnStatusCode: false });

        cy.get("img[title='Show details for Apple MacBook Pro']").click();
        cy.get("div[class='product-name'] h1").should(
          "have.text",
          "Apple MacBook Pro"
        );

     })
 })