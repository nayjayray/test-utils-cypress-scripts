describe("[Deactivate] Deactivate customers from Json file.", () => {
  before(() => {
    cy.readFile("cypress/support/")
  })

  it("Deactivates all customers in the Json file 'customers' array.", () => {
    // 
    cy.readFile("cypress/support/.json").then((users) => {
      // We get the list of customers that is associated with the Payee.
      // Create/Reuse the customers object array, then we
      // Use a forEach function to deactivate all the active customers that are associated with the Payee.
    })
  })
})