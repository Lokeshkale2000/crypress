describe("my test suits", () => {
    it.only("datadriven test", () => {
        cy.fixture("orangehrm2").then((data) => {
            cy.visit(
              "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
            );
            data.forEach((userdata) => {
                 cy.get("input[placeholder='Username']").type(
                   userdata.username
                 );
                 cy.get("input[placeholder='Password']").type(
                   userdata.password
                 );
                 cy.get("button[type='submit']").click();

                
                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                cy.get(":nth-child(8) > .oxd-main-menu-item").should(
                  "have.text",
                  userdata.expected
                );
                    cy.get(".oxd-userdropdown-tab > .oxd-icon").click()  
                } else {
                     cy.get(
                       ".oxd-text.oxd-text--p.oxd-alert-contebnt-text"
                     ).should("have.text", userdata.expected);
                }


                

            })
            
        })
    })
})