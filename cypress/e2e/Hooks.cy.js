// before
// after
// beforeEach
//afterEach

// tag are only ,skip
describe("using hooks", () => {
    before(() => {
        cy.log("******* lunch app ******")
    })
    after(() => {
        cy.log("***** closed app***");
    })

    beforeEach(() => {
        cy.log("**** login******")
    })
    afterEach(() => {
        cy.log("***** logout *****")
    })
    it('search', () => {
        
    })
    it(" advance", () => {
        cy.log("***** advance searching*****");
    })
    it("listing products", () => {
        cy.log("**** listing product****")
    })



})