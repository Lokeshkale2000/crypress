describe("check ui element", () => {
  it("checking radio button", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    // visibility of radio button
    cy.get("input#female").should("be.visible");
    cy.get("input#male").should("be.visible");

    // selecting radio button
    cy.get("input#male").check().should("be.checked");

    // Verify that female is now unchecked
    cy.get("input#female").should("not.be.checked");

    // Selecting female now, male should be unchecked
    cy.get("input#female").check().should("be.checked");
    cy.get("input#male").should("not.be.checked");
  });
});

describe("check ui element", () => {
  it("checking checkbox", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    // visibility of the element
    /*
    cy.get("input#monday").should("be.visible");
    // selecting single check box- monday
    cy.get("input#monday").check().should("be.checked");

    // unselecting checkbox
    cy.get("input#monday").uncheck().should("not.be.checked");
    */
    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should("be.checked");

    cy.get("input.form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked");

    cy.get("input.form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked");

    cy.get("input.form-check-input[type='checkbox']")
      .last()
      .check()
      .should("be.checked");
  });
});
