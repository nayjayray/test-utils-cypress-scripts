describe("Test script for Clean up script", () => {
  // Before you run the script, declare the file that you are saving the details to.
  before(() => {
    // The file name that details will be saved into, please follow the file naming format
    const fileName = '0.2.1_data.json'
    // The customer email that the script will use to generate the dummy customers.
    // Script is generating @gmail.com, just write 'intrinsikdevqa'
    const customerEmail = 'intrinsikdropbox'

    Cypress.env('jsonLocation', 'cypress/support/2-staging-json/' + fileName)
    Cypress.env('cusEmail', customerEmail)

    cy.log('All generated data will be saved into this file: ' + fileName)
    cy.log('^Is this statement above correct?^')
    cy.log('"No" = Change the fileName')
    cy.log('"Yes" = unpause the test runner.')
    cy.pause()
  })

  // Customers emails + Invoices Numbers generation
  it.skip("Step 1: Generate the core details -> Store them in the JSON file to use later.", ()=> {
    cy.readFile(Cypress.env('jsonLocation')).then((users) => {
      var customers = [];
      
      while (customers.length < 1) {
        for (var i = 1; i <= 1; i++) {
          var number = i;
          var bizShortName = 'CYBiz' + number
          var lastName = "Business " + number + ".0"
          var email = 'intrinsiktest+' + number + '+2@gmail.com';
          const epoch1 = Math.round(Date.now() / 1000)
          const epoch2 = Math.round(Date.now() / 10000)
          var invoice1 = 'INV-CYBIZ' + number + '-' + epoch1
          var invoice2 = 'INV-CYBIZ' + number + '-' + epoch2
          var array = {
            "note": "Step 1 - Base details generated",
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
      cy.writeFile(Cypress.env('jsonLocation'),users)
    })
  })
  
  // Customers creation step
  it.skip("Step 2: Create customers -> Store customer_id into JSON file", () => {
    cy.pause()
    cy.readFile(Cypress.env('jsonLocation')).then((users) => {
      cy.adminLoginTest('nicholas@intrinsik.ly','Dem0is!123').then((res) => {
        const adminToken = res.body.data.token

        const payees = users.payees
        const customerDetails = users.customerDetails
        const customers = users.customers
        var newCustomers = []
        function processCustomers(customers) {     
          cy.request({
            method: "POST",
            url: 'https://api.ara-pay.com/staging/ara/user/api/v1/customer/admin/create/many',
            headers: {
              authorization: "Bearer " + adminToken
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
              "note": "Step 2 - Customer created",
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
        }
        
        customers.forEach(function(customers) {
          processCustomers(customers);
        });
        users.customers = newCustomers
        cy.writeFile(Cypress.env('jsonLocation'), users)
      })
    })
  });

  // Create Draft invoices step
  it.skip("Step 3: Create Draft invoice -> Store invoice_ids into JSON object", () => {
    cy.pause()
    cy.readFile(Cypress.env('jsonLocation')).then((users) => {
      cy.userLoginTest('intrinsikdropbox@gmail.com','Dem0is!123').then((res) => {
        const userToken = res.body.data.token
        const payees = users.payees
        const customers = users.customers
        var invoicelist = []

        const processCustomers = (customers) => {     
          cy.request({
            method: "POST",
            url: 'https://api.ara-pay.com/staging/ara/invoice/api/v1/invoice/draft/create/one',
            headers: {
              authorization: 'Bearer ' + userToken
            },
            body: {
              "payee_id": payees[0].payeeId,
              "business_id": payees[0].businessId,
              "customer_id": customers.id,
              "invoice_number": customers.invoiceNo1,
              "amount": 1000,
              "previous_payment_amount": 0,
              "processable_value": 1000,
              "outstanding_discount": 0,
              "currency": "myr",
              "attachment": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9KJMULsV18DR2AN79EgvKMRJpiRf8Y7KVw&usqp=CAU",
              "issue_date": "2023-01-01T16:00:00.000Z",
              "due_date": "2023-01-30T16:00:00.000Z"
            }
          }).then((response) => {
            const invoice = response.body.data.invoice._id
            const invoiceId = response.body.data.invoice.invoice_number
            const msg = "Step 3 - Draft Invoice created"
            cy.readFile(Cypress.env('jsonLocation')).then((users) => {
              users.customers.note = msg
              users.customers.invoiceId = invoiceId
              users.customers.invoiceNo = invoice
              cy.writeFile(Cypress.env('jsonLocation'),users)
            })
            invoicelist.push(invoiceId)
          })
        }
        
        customers.forEach(function(customers) {
          processCustomers(customers);
        });
        users.invoiceList = invoicelist
        cy.writeFile(Cypress.env('jsonLocation'), users)
      })
    })
  })

  // Converting Draft to Active step
  it("Step 4: Convert draft invoice to Active invoice", () => {
    cy.readFile(Cypress.env('jsonLocation')).then((users) => {
      const customers = users.customers
      const invoiceObj = users.invoiceList
      const msg = "Step 4 - Draft invoices converted to Active invoices"

      cy.userLoginTest('intrinsikdropbox@gmail.com','Dem0is!123').then((res) => {
        const userToken = res.body.data.token
        const processCustomers = (customers) => {
          cy.request({
            method: "POST",
            url: "https://api.ara-pay.com/staging/ara/invoice/api/v1/invoice/draft/convert",
            headers: {
              authorization: 'Bearer ' + userToken
            },
            body: invoiceObj
          })
        }
        
        customers.forEach(function(customers) {
          processCustomers(customers);
        });
        users.customers.note = msg
        cy.writeFile(Cypress.env('jsonLocation'), users)
      })
    })
  })

  // Invoice clean up step
  it.skip("Step 5: Void all active invoices from JSON invoiceIds object", () => {

  })

  // Customer clean up step
  it("Step 6: Deactivate each customers from the Customers object in the JSON file.", () => {
    cy.pause()
    cy.readFile(Cypress.env('jsonLocation')).then((users) => {
      const customers = users.customers
      
      var logs = []
      
      function processCustomers(customers) {
        cy.userLoginTest('intrinsikdropbox@gmail.com','Dem0is!123').then((res) => {
          const token = res.body.data.token
          const url = "https://api.ara-pay.com/staging/ara/user/api/v1/customer/deactivate/one/" + customers.id

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
      cy.writeFile(Cypress.env('jsonLocation'),users)
    })
  })
});

