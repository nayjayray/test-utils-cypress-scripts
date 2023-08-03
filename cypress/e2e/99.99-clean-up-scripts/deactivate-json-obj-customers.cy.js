describe("[Deactivate] Deactivate customers from Json file.", () => {
  it("Deactivates all customers in the Json file 'customers' array.", () => {
    cy.readFile("cypress/support/99.0.0-dev-data.json").then((users) => {
      // Using a forEach function, we loop through the object and deactivate each of the customers in the object array
    })
  })
})