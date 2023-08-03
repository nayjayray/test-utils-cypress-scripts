describe("Test script for Clean up script", () => {
  // Before you run the script, declare the file that you are saving the details to.
  before(() => {
    // The file name that details will be saved into, please follow the file naming format
    const fileName = '21.07.23_data.json'

    Cypress.env('jsonLocation', 'cypress/support/2-staging-json/' + fileName)

    cy.log('All generated data will be saved into this file: ' + fileName)
    cy.log('^Is this statement above correct?^')
    cy.log('"No" = Change the fileName')
    cy.log('"Yes" = unpause the test runner.')
    cy.pause()
  })
  
  // Create Draft invoices step
  it.skip("Step 1: Create Draft invoice -> Store invoice_ids into JSON object", () => {
    cy.readFile(Cypress.env('jsonLocation')).then((users) => {
      cy.userLoginTest('intrinsikdropbox@gmail.com','Dem0is!123').then((res) => {
        const userToken = res.body.data.token
        const payees = users.payees
        const customers = users.customers
        var invoicelist = []
        var newCustomersArray = []

        const processCustomers = (customers) => {     
          const invoiceNumber = customers.invoiceNo1 + "001"
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
              "invoice_number": invoiceNumber,
              "amount": 5500,
              "previous_payment_amount": 0,
              "processable_value": 5500,
              "outstanding_discount": 0,
              "currency": "myr",
              "attachment": customers.file,
              "issue_date": "2023-01-01T16:00:00.000Z",
              "due_date": "2023-01-30T16:00:00.000Z"
            }
          }).then((response) => {
            const invoiceId = response.body.data.invoice._id
            const invoiceNo = response.body.data.invoice.invoice_number
            const msg = "Step 1 - Draft Invoice created"
            const obj = {
              "note": msg,
              "firstName": customers.firstName,
              "lastName": customers.lastName,
              "bizShort": customers.bizShort,
              "email": customers.email,
              "id": customers.id,
              "file": customers.file,
              "invoiceId1": invoiceId,
              "invoiceNo1": invoiceNo,
              "lodId": ""
            }
            invoicelist.push(invoiceId)
            newCustomersArray.push(obj)
          })
        }
        
        customers.forEach(function(customers) {
          processCustomers(customers);
        });
        users.invoiceList = invoicelist
        users.customers = newCustomersArray
        cy.writeFile(Cypress.env('jsonLocation'), users)
      })
    })
  })

  // Converting Draft to Active step
  it("Step 2: Convert draft invoice to Active invoice", () => {
    cy.readFile(Cypress.env('jsonLocation')).then((users) => {
      const customers = users.customers
      const msg = "Step 2 - Draft invoices converted to Active invoices"
      var newCustomersArray = []

      cy.userLoginTest('intrinsikdropbox@gmail.com','Dem0is!123').then((res) => {
        const userToken = res.body.data.token
        
        cy.request({
          method: "POST",
          url: "https://api.ara-pay.com/staging/ara/invoice/api/v1/invoice/draft/convert",
          headers: {
            authorization: 'Bearer ' + userToken
          },
          body: {
            "send_now": false,
            "invoice_ids": users.invoiceList,
            "business_id": users.payees[0].businessId
          }
        })
        const processCustomers = (customers) => {
          var obj = {
            "note": msg,
            "firstName": customers.firstName,
            "lastName": customers.lastName,
            "bizShort": customers.bizShort,
            "email": customers.email,
            "id": customers.id,
            "file": customers.file,
            "invoiceId1": customers.invoiceId1,
            "invoiceNo1": customers.invoiceNo1,
            "lodId": ""
          }
          newCustomersArray.push(obj)
        }
        
        customers.forEach(function(customers) {
          processCustomers(customers);
        });
        users.customers = newCustomersArray
        cy.writeFile(Cypress.env('jsonLocation'), users)
      })
    })
  })

  // Invoice clean up step
  it.skip("Step 5: Void all active invoices from JSON invoiceIds object", () => {

  })

  // Customer clean up step
  it.skip("Step 6: Deactivate each customers from the Customers object in the JSON file.", () => {
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

