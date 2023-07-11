describe("Test script for Clean up script", () => {
  // Customers emails + Invoices Numbers generation
  it("Step 1: Generate the core details -> Store them in the JSON file to use later.", ()=> {
    cy.readFile("cypress/support/99.0.0-copy.json").then((users) => {
      var customers = [];
      
      while (customers.length < 5) {
        for (var i = 1; i <= 5; i++) {
          var number = i;
          var bizShortName = 'CYBiz' + i
          var lastName = "Business " + i + ".0"
          var email = 'intrinsikdevqa+' + number + '.1@gmail.com';
          const epoch1 = Math.round(Date.now() / 1000)
          const epoch2 = Math.round(Date.now() / 10000)
          var invoice1 = 'INV-CYBIZ' + number + '-' + epoch1
          var invoice2 = 'INV-CYBIZ' + number + '-' + epoch2
          var array = {
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
  it("Step 2: Create customers -> Store customer_id into JSON file", () => {
    cy.pause()
    cy.readFile('cypress/support/99.0.0-copy.json').then((users) => {
      Cypress.env('payee_id',users.payees[0].userId)
      Cypress.env('business_id',users.payees[0].businessId)
      Cypress.env('first_name',users.customerDetails.firstName)
      Cypress.env('last_name',users.customerDetails.lastName)
      Cypress.env('phone_number',users.customerDetails.phoneNumber)
      Cypress.env('user_type',users.customerDetails.userInd)
      Cypress.env('biz_name',users.customerDetails.bizName)
      Cypress.env('short_name',users.customerDetails.shortName)
      Cypress.env('type',users.customerDetails.type)
      Cypress.env('address_line_1',users.customerDetails.addressLine1)
      Cypress.env('address_line_2',users.customerDetails.addressLine2)
      Cypress.env('city',users.customerDetails.city)
      Cypress.env('state',users.customerDetails.state)
      Cypress.env('postcode',users.customerDetails.postcode)
      Cypress.env('country_code',users.customerDetails.countryCode)
      Cypress.env('userToken',users.customerDetails.userToken)
      
      var payees = users.payees
      var customerDetails = users.customerDetails
      var customers = users.customers
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
                  "business_id": Cypress.env('business_id'),
                  "first_name": Cypress.env('first_name'),
                  "last_name": Cypress.env('last_name'),
                  "email": customers.email,
                  "phone_number": Cypress.env('phone_number'),
                  "office_number": Cypress.env('phone_number'),
                  "user_type": Cypress.env('user_type'),
                  "individual": {
                    "short_name": (Cypress.env('short_name') + '1'),
                    "address_line_1": Cypress.env('address_line_1'),
                    "address_line_2": Cypress.env('address_line_2'),
                    "city": Cypress.env('city'),
                    "state": Cypress.env('state'),
                    "postcode": Cypress.env('postcode'),
                    "country_code": Cypress.env('country_code')
                  }
                }
              ]
            }
          }).then ((xhr) => {
            var customerId = xhr.body.data.customers[0]._id
            var array = {
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
  it("Step 3: Create Draft invoice -> Store invoice_ids object into JSON", () => {

  })

  // Converting Draft to Active step
  it("Step 4: Convert draft invoice to Active invoice", () => {

  })

  // Invoice clean up step
  it("Step 5: Void all active invoices from JSON invoiceIds object", () => {

  })

  // Customer clean up step
  it("Step 6: Deactivate each customers from the Customers object in the JSON file.", () => {

  })
});

