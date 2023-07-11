describe("[Deactivate] Deactivate customers from Json file.", () => {
  it("Deactivates all customers in the Json file 'customers' array.", () => {
    cy.readFile("cypress/support/99.0.0-dev-data.json").then((users) => {
      var data = users.customers;
      for (var i = 0; i < data.length; i++) {
        if (data[i].email !== "") {
          console.log("Email:", data[i].email);
        }
      }
    })
  })
})