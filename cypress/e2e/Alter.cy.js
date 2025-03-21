describe("alters in cypress", () => {
  it(" alters", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    // normal alter
    cy.get("button[onclick='jsAlert()']").click();
    // we triigger one event
    cy.on("window:alert", (t) => {
      expect(t).to.contain("I am a JS Alert");
    });
    // alter window automatically closed by cypress
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
});
describe("alters confirmation in cypress", () => {
  it(" alters", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    // confirmation alter
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });
    // cypress automatically  closed ok button
    cy.get("#result").should("have.text", "You clicked: Ok");
  });
  it("confirm alters", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    // confirmation alter
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });
    cy.on("window:confrim", () => false); // cypress will closed window using cancelled button

    cy.get("#result").should("have.text", "You clicked: Cancel");
    // cypress automatically  closed ok button
    cy.get("#result").should("have.text", "You clicked: Ok");
  });
  it(" prompt alters", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //  js prompt alter
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome");
    });

    cy.get("button[onclick='jsPrompt()']").click();
   // cy.on("window:prompt", () => false);
    cy.get("#result").should("have.text", "you entered: welcome");
  });


   it(" authenticated alters", () => {
     cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:'admin',password:'admin'}});
     //  js prompt alter


  cy.get("div[class='example']p").should('have.contain', "Congratulations");


   });
  
  

});
