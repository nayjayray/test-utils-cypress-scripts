describe("[Init] Generate 5 emails > Saving those emails in a Json file in cypress/support/{name}.json", () => {
  // Template 1
  it("Template one - Using a for loop to generate emails then saving them in the JSON file", () => {
    cy.readFile("cypress/support/{json}.json").then((users) => {
      // empty customers objecy array
      var customers = [];
      
      // Number = how many email do you want to generate
      // while the array length is less than 5
      while (customers.length < 5) {
        // for loop
        for (var i = 1; i <= 5; i++) {
          // generated email format looks something like this: intrinsikdevqa+1@gmail.com
          var number = i;
          var email = 'intrinsikdevqa+' + number + '@gmail.com';
          const epoch1 = Math.round(Date.now() / 1000)
          const epoch2 = Math.round(Date.now() / 10000)
          var invoice1 = 'INV-CYBIZ' + number + '-' + epoch1
          var invoice2 = 'INV-CYBIZ' + number + '-' + epoch2
          // create a new array for each specific email
          var array = {
            "email": email,
            "id": "",
            "invoiceId1": "",
            "invoiceNo1": invoice1,
            "invoiceId2": "",
            "invoiceNo2": invoice2,
            "lodId": ""
          }
          // push the array into the 'customers' object
          customers.push(array);
        }
      }
      // define the customer object
      users.customers = customers
      // write the customers object into the json file
      // Note this step will replace anything that is already exist in the customers object in the Json file.
      cy.writeFile("cypress/support/{json}.json",users)
    })
  })

  // Template 2
  it("Example two - Using .forEach to run a script for each array in an object.", () => {
    // First you read from the JSON file
    cy.readFile("cypress/support/{json}.json").then((users) => {

      // customers obj.array = customers obj.array in the JSON file
      var customers = users.customers
      // this create a new customer object

      // we define a new object/array that we can reuse in future APIs
      var invoiceIds = []
      var lodIds = []

      // Function to run a specific script for each customer's detail
      // Example: Run a create customer script
      function processCustomers(customers) {
        // here you can define the cypress script to do something with the array (details)
        cy.log('This does something with this email: ' + customers.email)
        // Add your cypress script here
        // Example are scripts like [deactivate customers, draft invoice creation... etc]
      }

      // here we can create new Objects/Arrays with ids that we can use later for clean up.
      // The IDs we collect from the API responses
      invoiceIds.push(xhr.body.data.invoice._id)
      lodIds.push(xhr.body.data.lod._id)


      // For each array in the customers object, run this function once.
      customers.forEach(function(customers) {
        processCustomers(customers);
      });

      // Here we define new object to be stores into the JSON file later.
      users.invoiceIds = invoiceIds
      users.lodIds = lodIds

      // This command here will replace the existing 'customers' object in the JSON file with the new one above.
      cy.writeFile("cypress/support/{json}.json",users)
    })
  })
})