describe("suit name", () => {
  it("verify title- positive", () => {
    cy.visit("https://www.orangehrm.com/");
    cy.title().should("eq", "Human Resources Management Software | OrangeHRM");
  });
  it("verify title- negative", () => {
    cy.visit("https://www.orangehrm.com/");
    cy.title().should("eq", "OrangeHRM123");
  });

  it("test3", () => {
    expect(true).to.equal(true);
  });
});
