describe("handle table",( () => {
  beforeEach("Login and Navigate", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");

    // Clear existing cookies (if any) to start with a clean state.
    cy.clearCookies();

    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();

    // Explicitly wait for the login to complete and the redirect to occur.
    cy.url().should("not.include", "route=common/login", { timeout: 10000 }); // Increase timeout

    // Explicitly wait for the alert/modal to be present and then close it.
    cy.get(".btn-close", { timeout: 10000 }).click(); // Increase timeout

    cy.get("#menu-customer > a", { timeout: 10000 }).click(); // Increase timeout
    cy.get("#menu-customer > ul > li:first-child", { timeout: 10000 }).click(); // Increase timeout

    // Final URL check, with increased timeout.
    cy.url().should("include", "route=customer/customer", { timeout: 10000 });

    // Extra check to ensure that the customer table is present.
    cy.get('table', { timeout: 10000 }).should('be.visible');
  });

  // Your test cases here...


  it("Check Number Rows & Columns", () => {
    cy.get("table[class='table table-boardered table-hover']>tbody>tr").should(
      "have.length",
      "10"
    );
    cy.get("table[class='table table-boardered table-hover']>thead>td").should(
      "have.length",
      "7"
    );
  });

  it("Check cell data from specific row and Column", () => {
    cy.get(
      "table[class= 'table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)"
    ).contains("rs@yopmail.com");
  });
    it('')
}));
