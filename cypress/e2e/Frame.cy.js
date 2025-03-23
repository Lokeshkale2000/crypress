import "cypress-iframe";

describe("iframe in cypress", () => {
  it("approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    // Find the actual editable element within the iframe and clear/type
    iframe.find("#tinymce").clear().type("welcome {ctrl+a}");
    cy.get("[aria-label='Bold']").click();
  });


  it("approach 2 -by using custom command", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.getIframe("#mce_0").clear().type("welcome {ctrl+a}");
    cy.get("[aria-label='Bold']").click();
  });

  it("approach 3-by using cypress iframe plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").clear().type("welcome {ctrl+a}");
    cy.get("[aria-label='Bold']").click();
  });
});

Cypress.Commands.add("getIframe", (iframe) => {
  return cy
    .get(iframe) // Corrected: use the passed iframe selector
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});
