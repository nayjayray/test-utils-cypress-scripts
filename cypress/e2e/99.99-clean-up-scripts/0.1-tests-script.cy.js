describe("Test script for Clean up script", () => {
  // Customers emails + Invoices Numbers generation
  it.skip("Step 1: Generate the core details -> Store them in the JSON file to use later.", ()=> {
    cy.readFile("cypress/support/99.0.0-copy.json").then((users) => {
      var customers = [];
      
      while (customers.length < 5) {
        for (var i = 1; i <= 5; i++) {
          var number = i;
          var bizShortName = 'CYBiz' + i
          var lastName = "Business " + i + ".0"
          var email = 'intrinsikdevqa+' + number + '.1307@gmail.com';
          const epoch1 = Math.round(Date.now() / 1000)
          const epoch2 = Math.round(Date.now() / 10000)
          var invoice1 = 'INV-CYBIZ' + number + '-' + epoch1
          var invoice2 = 'INV-CYBIZ' + number + '-' + epoch2
          var array = {
            "note": "Step 1 - Details generated",
            "firstName": "Cypress",
            "lastName": lastName,
            "bizShort": bizShortName,
            "email": email,
            "id": "",
            "invoiceId1": "",
            "invoiceNo1": invoice1,
            "invoiceId2": "",
            "invoiceNo2": invoice2,
            "lodId": ""
          }
          customers.push(array);
        }
      }
      users.customers = customers
      cy.writeFile("cypress/support/99.0.0-copy.json",users)
    })
  })
  
  // Customers creation step
  it.skip("Step 2: Create customers -> Store customer_id into JSON file", () => {
    cy.pause()
    cy.readFile('cypress/support/99.0.0-copy.json').then((users) => {
      const payees = users.payees
      const customerDetails = users.customerDetails
      const customers = users.customers
      var newCustomers = []

      function processCustomers(customers) {     
        cy.adminLoginTest('nicholas@intrinsik.ly','Dem0is!123').then((res) => {
          const adminToken = res.body.data.token
          cy.request({
            method: "POST",
            url: 'https://api.ara-pay.com/staging/ara/user/api/v1/customer/admin/create/many',
            headers: {
              authorization: 'Bearer ' + adminToken
            },
            body: {
              "customers": [
                {
                  "business_id": payees[0].businessId,
                  "first_name": customers.firstName,
                  "last_name": customers.lastName,
                  "email": customers.email,
                  "phone_number": customerDetails.phoneNumber,
                  "office_number": customerDetails.phoneNumber,
                  "user_type": customerDetails.userInd,
                  "individual": {
                    "short_name": customers.bizShort,
                    "address_line_1": customerDetails.addressLine1,
                    "address_line_2": customerDetails.addressLine2,
                    "city": customerDetails.city,
                    "state": customerDetails.state,
                    "postcode": customerDetails.postcode,
                    "country_code": customerDetails.countryCode
                  }
                }
              ]
            }
          }).then ((xhr) => {
            var customerId = xhr.body.data.customers[0]._id
            var array = {
              "note": "Step 1 - Details generated",
              "firstName": customers.firstName,
              "lastName": customers.lastName,
              "bizShort": customers.bizShort,
              "email": customers.email,
              "id": customerId,
              "invoiceId1": "",
              "invoiceNo1": customers.invoiceNo1,
              "invoiceId2": "",
              "invoiceNo2": customers.invoiceNo2,
              "lodId": ""
            }
            newCustomers.push(array)
          })
        })
      }
      
      customers.forEach(function(customers) {
        processCustomers(customers);
      });
      users.customers = newCustomers
      cy.writeFile("cypress/support/99.0.0-copy.json", users)
    })
  });

  // Create Draft invoices step
  it.skip("Step 3: Create Draft invoice -> Store invoice_ids object into JSON", () => {
    
  })

  // Converting Draft to Active step
  it.skip("Step 4: Convert draft invoice to Active invoice", () => {

  })

  // Invoice clean up step
  it.skip("Step 5: Void all active invoices from JSON invoiceIds object", () => {

  })

  // Customer clean up step
  it.skip("Step 6: Deactivate each customers from the Customers object in the JSON file.", () => {
    cy.pause()
    cy.readFile("cypress/support/99.0.0-copy.json").then((users) => {
      const customers = users.customers
      
      var logs = []
      
      function processCustomers(customers) {
        cy.userLoginTest('nicholas@intrinsik.ly','Dem0is!123').then((res) => {
          const token = res.body.data.token
          const url = "https://api.ara-pay.com/staging/ara/user/api/v1/customer/deactivate/one/" + customers.id
          console.log(url)
          console.log(customers)

          cy.request({
            method: "PUT",
            url: url,
            headers: {
              authorization: "Bearer " + token
            }
          })
        }).then(() => {
          const deactivatedCustomer = customers.email
          var log = {"msg": "Customer " + deactivatedCustomer + " has been deactivated."}
          console.log(log)
          logs.push(log);
        })
      }

      customers.forEach(function(customers) {
        processCustomers(customers);
      });
      console.log(logs)
      users.customers = logs
      cy.writeFile("cypress/support/99.0.0-copy.json",users)
    })
  })
});

