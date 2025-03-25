// click on link label
// over writing existing contians() cammand
// re-usuable custom command

describe("Custom commands", () => {
  it("handling links", () => {
    cy.visit("https://demo.nopcommerce.com/");
    // direct - without custom commands

    //cy.get("img[title='Show details for Apple MacBook Pro']").click();
    //cy.get("div[class='product-name'] h1").should(
    //    "have.text",
    //   "Apple MacBook Pro"
    //);
    cy.clickLink("Apple MacBook Pro");

    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro"
    );
  });
  it(" overwriting existing command", () => {
    cy.visit("https://demo.nopcommerce.com/");

    cy.clickLink("APPLE MACBOOK PRO");

    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro"
    );
  });

  it.only("Login command", () => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.clickLink("Log in"); // custom command
    cy.loginapp("testing@gmail.com", "test123"); // custom command
    cy.get(".ico-account").should("have.text", "My account");
  });
});
