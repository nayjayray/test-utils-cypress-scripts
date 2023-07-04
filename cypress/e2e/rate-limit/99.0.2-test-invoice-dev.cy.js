describe("Script creating 20 then deactivating 20", () => {
  // This is a script that will run before the next script.
  // Customer ID is only used in invoice creation, so in this case we use before(() => {})
  // If variables from Json file is reused in all test, use beforeEach(() => {})
  before(() => {
    // Reading from config file > Setting test env variables
    cy.readFile('cypress/support/99.0.0-data.json').then((customer) => {
      const epoch = Math.round(Date.now() / 1000)
      Cypress.env('inv1','INV-1-' + epoch)
      Cypress.env('inv2','INV-2-' + epoch)
      Cypress.env('inv3','INV-3-' + epoch)
      Cypress.env('inv4','INV-4-' + epoch)
      Cypress.env('inv5','INV-5-' + epoch)
      Cypress.env('inv6','INV-6-' + epoch)
      Cypress.env('inv7','INV-7-' + epoch)
      Cypress.env('inv8','INV-8-' + epoch)
      Cypress.env('inv9','INV-9-' + epoch)
      Cypress.env('inv10','INV-10-' + epoch)
      Cypress.env('inv11','INV-11-' + epoch)
      Cypress.env('inv12','INV-12-' + epoch)
      Cypress.env('inv13','INV-13-' + epoch)
      Cypress.env('inv14','INV-14-' + epoch)
      Cypress.env('inv15','INV-15-' + epoch)
      Cypress.env('inv16','INV-16-' + epoch)
      Cypress.env('inv17','INV-17-' + epoch)
      Cypress.env('inv18','INV-18-' + epoch)
      Cypress.env('inv19','INV-19-' + epoch)
      Cypress.env('inv20','INV-20-' + epoch)
      Cypress.env('inv21','INV-21-' + epoch)
      Cypress.env('inv22','INV-22-' + epoch)
      Cypress.env('inv23','INV-23-' + epoch)
      Cypress.env('inv24','INV-24-' + epoch)
      Cypress.env('inv25','INV-25-' + epoch)
      Cypress.env('inv26','INV-26-' + epoch)
      Cypress.env('inv27','INV-27-' + epoch)
      Cypress.env('inv28','INV-28-' + epoch)
      Cypress.env('inv29','INV-29-' + epoch)
      Cypress.env('inv30','INV-30-' + epoch)
      Cypress.env('inv31','INV-31-' + epoch)
      Cypress.env('inv32','INV-32-' + epoch)
      Cypress.env('inv33','INV-33-' + epoch)
      Cypress.env('inv34','INV-34-' + epoch)
      Cypress.env('inv35','INV-35-' + epoch)
      Cypress.env('inv36','INV-36-' + epoch)
      Cypress.env('inv37','INV-37-' + epoch)
      Cypress.env('inv38','INV-38-' + epoch)
      Cypress.env('inv39','INV-39-' + epoch)
      Cypress.env('inv40','INV-40-' + epoch)
      Cypress.env('inv41','INV-41-' + epoch)
      Cypress.env('inv42','INV-42-' + epoch)
      Cypress.env('inv43','INV-43-' + epoch)
      Cypress.env('inv44','INV-44-' + epoch)
      Cypress.env('inv45','INV-45-' + epoch)
      Cypress.env('inv46','INV-46-' + epoch)
      Cypress.env('inv47','INV-47-' + epoch)
      Cypress.env('inv48','INV-48-' + epoch)
      Cypress.env('inv49','INV-49-' + epoch)
      Cypress.env('inv50','INV-50-' + epoch)
      // Cypress.env('email1',customer[0].email1)
      // Cypress.env('email2',customer[1].email2)
      // Cypress.env('email3',customer[2].email3)
      // Cypress.env('email4',customer[3].email4)
      // Cypress.env('email5',customer[4].email5)
      // Cypress.env('email6',customer[5].email6)
      // Cypress.env('email7',customer[6].email7)
      // Cypress.env('email8',customer[7].email8)
      // Cypress.env('email9',customer[8].email9)
      // Cypress.env('email10',customer[9].email10)
      // Cypress.env('email11',customer[10].email11)
      // Cypress.env('email12',customer[11].email12)
      // Cypress.env('email13',customer[12].email13)
      // Cypress.env('email14',customer[13].email14)
      // Cypress.env('email15',customer[14].email15)
      // Cypress.env('email16',customer[15].email16)
      // Cypress.env('email17',customer[16].email17)
      // Cypress.env('email18',customer[17].email18)
      // Cypress.env('email19',customer[18].email19)
      // Cypress.env('email20',customer[19].email20)
      // Cypress.env('email21',customer[20].email21)
      // Cypress.env('email22',customer[21].email22)
      // Cypress.env('email23',customer[22].email23)
      // Cypress.env('email24',customer[23].email24)
      // Cypress.env('email25',customer[24].email25)
      // Cypress.env('email26',customer[25].email26)
      // Cypress.env('email27',customer[26].email27)
      // Cypress.env('email28',customer[27].email28)
      // Cypress.env('email29',customer[28].email29)
      // Cypress.env('email30',customer[29].email30)
      // Cypress.env('email31',customer[30].email31)
      // Cypress.env('email32',customer[31].email32)
      // Cypress.env('email33',customer[32].email33)
      // Cypress.env('email34',customer[33].email34)
      // Cypress.env('email35',customer[34].email35)
      // Cypress.env('email36',customer[35].email36)
      // Cypress.env('email37',customer[36].email37)
      // Cypress.env('email38',customer[37].email38)
      // Cypress.env('email39',customer[38].email39)
      // Cypress.env('email40',customer[39].email40)
      // Cypress.env('email41',customer[40].email41)
      // Cypress.env('email42',customer[41].email42)
      // Cypress.env('email43',customer[42].email43)
      // Cypress.env('email44',customer[43].email44)
      // Cypress.env('email45',customer[44].email45)
      // Cypress.env('email46',customer[45].email46)
      // Cypress.env('email47',customer[46].email47)
      // Cypress.env('email48',customer[47].email48)
      // Cypress.env('email49',customer[48].email49)
      // Cypress.env('email520',customer[49].email50)
      Cypress.env('cus1Id',customer.customers[0].id)
      Cypress.env('cus2Id',customer.customers[1].id)
      Cypress.env('cus3Id',customer.customers[2].id)
      Cypress.env('cus4Id',customer.customers[3].id)
      Cypress.env('cus5Id',customer.customers[4].id)
      Cypress.env('cus6Id',customer.customers[5].id)
      Cypress.env('cus7Id',customer.customers[6].id)
      Cypress.env('cus8Id',customer.customers[7].id)
      Cypress.env('cus9Id',customer.customers[8].id)
      Cypress.env('cus10Id',customer.customers[9].id)
      Cypress.env('cus11Id',customer.customers[10].id)
      Cypress.env('cus12Id',customer.customers[11].id)
      Cypress.env('cus13Id',customer.customers[12].id)
      Cypress.env('cus14Id',customer.customers[13].id)
      Cypress.env('cus15Id',customer.customers[14].id)
      Cypress.env('cus16Id',customer.customers[15].id)
      Cypress.env('cus17Id',customer.customers[16].id)
      Cypress.env('cus18Id',customer.customers[17].id)
      Cypress.env('cus19Id',customer.customers[18].id)
      Cypress.env('cus20Id',customer.customers[19].id)
      Cypress.env('cus21Id',customer.customers[20].id)
      Cypress.env('cus22Id',customer.customers[21].id)
      Cypress.env('cus23Id',customer.customers[22].id)
      Cypress.env('cus24Id',customer.customers[23].id)
      Cypress.env('cus25Id',customer.customers[24].id)
      Cypress.env('cus26Id',customer.customers[25].id)
      Cypress.env('cus27Id',customer.customers[26].id)
      Cypress.env('cus28Id',customer.customers[27].id)
      Cypress.env('cus29Id',customer.customers[28].id)
      Cypress.env('cus30Id',customer.customers[29].id)
      Cypress.env('cus31Id',customer.customers[30].id)
      Cypress.env('cus32Id',customer.customers[31].id)
      Cypress.env('cus33Id',customer.customers[32].id)
      Cypress.env('cus34Id',customer.customers[33].id)
      Cypress.env('cus35Id',customer.customers[34].id)
      Cypress.env('cus36Id',customer.customers[35].id)
      Cypress.env('cus37Id',customer.customers[36].id)
      Cypress.env('cus38Id',customer.customers[37].id)
      Cypress.env('cus39Id',customer.customers[38].id)
      Cypress.env('cus40Id',customer.customers[39].id)
      Cypress.env('cus41Id',customer.customers[40].id)
      Cypress.env('cus42Id',customer.customers[41].id)
      Cypress.env('cus43Id',customer.customers[42].id)
      Cypress.env('cus44Id',customer.customers[43].id)
      Cypress.env('cus45Id',customer.customers[44].id)
      Cypress.env('cus46Id',customer.customers[45].id)
      Cypress.env('cus47Id',customer.customers[46].id)
      Cypress.env('cus48Id',customer.customers[47].id)
      Cypress.env('cus49Id',customer.customers[48].id)
      Cypress.env('cus50Id',customer.customers[49].id)
      Cypress.env('business_id',customer.payees[0].businessId)
      Cypress.env('payee_id',customer.payees[0].payeeId)
    })
  })
  // Use '.skip' in between 'it' and () to control when a script runs
  // example:
  // it("something", () => {code...})
  // This runs the script
  //
  // it.skip("something", () => {code...})
  // This will tell Cypress Runner to skip running this script

  // Step 1 - Create 50 'Save as Draft' overdue invoices
  // This scripts creates 50 'Save as Draft' overdue invoices
  // One invoice for each customer
  it.skip("Step 1 - Creates an overdue invoice for each customers(50)", () => {
    cy.userLoginDev('joe@intrinsik.ly','P@ssword123').then((res) => {
      const token = res.body.data.token
      // Creates 1 invoice for Customer 1
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus1Id'),
          "invoice_number": Cypress.env('inv1'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[0].invoiceId = invoiceId
          users.customers[0].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 2
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus2Id'),
          "invoice_number": Cypress.env('inv2'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[1].invoiceId = invoiceId
          users.customers[1].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 3
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus3Id'),
          "invoice_number": Cypress.env('inv3'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[2].invoiceId = invoiceId
          users.customers[2].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 4
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus4Id'),
          "invoice_number": Cypress.env('inv4'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[3].invoiceId = invoiceId
          users.customers[3].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 5
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus5Id'),
          "invoice_number": Cypress.env('inv5'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[4].invoiceId = invoiceId
          users.customers[4].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 6
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus6Id'),
          "invoice_number": Cypress.env('inv6'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[5].invoiceId = invoiceId
          users.customers[5].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 7
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus7Id'),
          "invoice_number": Cypress.env('inv7'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[6].invoiceId = invoiceId
          users.customers[6].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 8
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus8Id'),
          "invoice_number": Cypress.env('inv8'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[7].invoiceId = invoiceId
          users.customers[7].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 9
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus9Id'),
          "invoice_number": Cypress.env('inv9'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[8].invoiceId = invoiceId
          users.customers[8].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 10
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus10Id'),
          "invoice_number": Cypress.env('inv10'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[9].invoiceId = invoiceId
          users.customers[9].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 11
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus11Id'),
          "invoice_number": Cypress.env('inv11'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[10].invoiceId = invoiceId
          users.customers[10].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 12
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus12Id'),
          "invoice_number": Cypress.env('inv12'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[11].invoiceId = invoiceId
          users.customers[11].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 13
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus13Id'),
          "invoice_number": Cypress.env('inv13'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[12].invoiceId = invoiceId
          users.customers[12].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 14
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus14Id'),
          "invoice_number": Cypress.env('inv14'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[13].invoiceId = invoiceId
          users.customers[13].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 15
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus15Id'),
          "invoice_number": Cypress.env('inv15'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[14].invoiceId = invoiceId
          users.customers[14].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 16
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus16Id'),
          "invoice_number": Cypress.env('inv16'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[15].invoiceId = invoiceId
          users.customers[15].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 17
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus17Id'),
          "invoice_number": Cypress.env('inv17'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[16].invoiceId = invoiceId
          users.customers[16].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 18
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus18Id'),
          "invoice_number": Cypress.env('inv18'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[17].invoiceId = invoiceId
          users.customers[17].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 19
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus19Id'),
          "invoice_number": Cypress.env('inv19'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[18].invoiceId = invoiceId
          users.customers[18].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 20
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus20Id'),
          "invoice_number": Cypress.env('inv20'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[19].invoiceId = invoiceId
          users.customers[19].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 21
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus21Id'),
          "invoice_number": Cypress.env('inv21'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[20].invoiceId = invoiceId
          users.customers[20].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 22
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus22Id'),
          "invoice_number": Cypress.env('inv22'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[21].invoiceId = invoiceId
          users.customers[21].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 23
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus23Id'),
          "invoice_number": Cypress.env('inv23'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[22].invoiceId = invoiceId
          users.customers[22].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 24
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus24Id'),
          "invoice_number": Cypress.env('inv24'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[23].invoiceId = invoiceId
          users.customers[23].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 25
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus25Id'),
          "invoice_number": Cypress.env('inv25'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[24].invoiceId = invoiceId
          users.customers[24].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 26
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus26Id'),
          "invoice_number": Cypress.env('inv26'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[25].invoiceId = invoiceId
          users.customers[25].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 27
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus27Id'),
          "invoice_number": Cypress.env('inv27'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[26].invoiceId = invoiceId
          users.customers[26].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 28
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus28Id'),
          "invoice_number": Cypress.env('inv28'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[27].invoiceId = invoiceId
          users.customers[27].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 29
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus29Id'),
          "invoice_number": Cypress.env('inv29'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[28].invoiceId = invoiceId
          users.customers[28].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 30
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus30Id'),
          "invoice_number": Cypress.env('inv30'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[29].invoiceId = invoiceId
          users.customers[29].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 31
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus31Id'),
          "invoice_number": Cypress.env('inv31'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[30].invoiceId = invoiceId
          users.customers[30].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 32
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus32Id'),
          "invoice_number": Cypress.env('inv32'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[31].invoiceId = invoiceId
          users.customers[31].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 33
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus33Id'),
          "invoice_number": Cypress.env('inv33'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[32].invoiceId = invoiceId
          users.customers[32].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 34
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus34Id'),
          "invoice_number": Cypress.env('inv34'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[33].invoiceId = invoiceId
          users.customers[33].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 35
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus35Id'),
          "invoice_number": Cypress.env('inv35'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[34].invoiceId = invoiceId
          users.customers[34].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 36
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus36Id'),
          "invoice_number": Cypress.env('inv36'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[35].invoiceId = invoiceId
          users.customers[35].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 37
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus37Id'),
          "invoice_number": Cypress.env('inv37'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[36].invoiceId = invoiceId
          users.customers[36].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 38
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus38Id'),
          "invoice_number": Cypress.env('inv38'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[37].invoiceId = invoiceId
          users.customers[37].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 39
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus39Id'),
          "invoice_number": Cypress.env('inv39'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[38].invoiceId = invoiceId
          users.customers[38].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 40
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus40Id'),
          "invoice_number": Cypress.env('inv40'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[39].invoiceId = invoiceId
          users.customers[39].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 41
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus41Id'),
          "invoice_number": Cypress.env('inv41'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[40].invoiceId = invoiceId
          users.customers[40].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 42
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus42Id'),
          "invoice_number": Cypress.env('inv42'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[41].invoiceId = invoiceId
          users.customers[41].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 43
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus43Id'),
          "invoice_number": Cypress.env('inv43'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[42].invoiceId = invoiceId
          users.customers[42].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 44
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus44Id'),
          "invoice_number": Cypress.env('inv44'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[43].invoiceId = invoiceId
          users.customers[43].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 45
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus45Id'),
          "invoice_number": Cypress.env('inv45'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[44].invoiceId = invoiceId
          users.customers[44].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 46
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus46Id'),
          "invoice_number": Cypress.env('inv46'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[45].invoiceId = invoiceId
          users.customers[45].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 47
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus47Id'),
          "invoice_number": Cypress.env('inv47'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[46].invoiceId = invoiceId
          users.customers[46].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 48
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus48Id'),
          "invoice_number": Cypress.env('inv48'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[47].invoiceId = invoiceId
          users.customers[47].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 49
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus49Id'),
          "invoice_number": Cypress.env('inv49'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[48].invoiceId = invoiceId
          users.customers[48].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })

      // Creates 1 invoice for Customer 50
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/create/one',
        headers: {
          authorization: 'Bearer ' + token
        },
        body: {
          "payee_id": Cypress.env('payee_id'),
          "business_id": Cypress.env('business_id'),
          "customer_id": Cypress.env('cus50Id'),
          "invoice_number": Cypress.env('inv50'),
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
        cy.readFile('cypress/support/99.0.0-data.json').then((users) => {
          users.customers[49].invoiceId = invoiceId
          users.customers[49].invoiceNo = invoice
          cy.writeFile('cypress/support/99.0.0-data.json',users)
        })
      })
    })
  })
  // The invoice._id of the created invoice is stored in 99.0.0-data.json file
  // Each invoice._id is tied to the respective customer
  
  // Step 2 - Convert all 50 'Save as Draft' overdue invoices to 'Active' overdue invoices
  // This scripts converts all 50 'Saved as Draft' overdue invoices created above into an 'Active' overdue invoice
  // Note: Only run this script if you plan to create 'Active' invoices
  it.skip("Step 2 - Convert all 50 Overdue Draft invoices to Active Overdue invoices", () => {
    cy.readFile('cypress/support/99.0.0-data.json').then((customer) => {
      Cypress.env('invoice1',customer.customers[0].invoiceNo)
      Cypress.env('invoice2',customer.customers[1].invoiceNo)
      Cypress.env('invoice3',customer.customers[2].invoiceNo)
      Cypress.env('invoice4',customer.customers[3].invoiceNo)
      Cypress.env('invoice5',customer.customers[4].invoiceNo)
      Cypress.env('invoice6',customer.customers[5].invoiceNo)
      Cypress.env('invoice7',customer.customers[6].invoiceNo)
      Cypress.env('invoice8',customer.customers[7].invoiceNo)
      Cypress.env('invoice9',customer.customers[8].invoiceNo)
      Cypress.env('invoice10',customer.customers[9].invoiceNo)
      Cypress.env('invoice11',customer.customers[10].invoiceNo)
      Cypress.env('invoice12',customer.customers[11].invoiceNo)
      Cypress.env('invoice13',customer.customers[12].invoiceNo)
      Cypress.env('invoice14',customer.customers[13].invoiceNo)
      Cypress.env('invoice15',customer.customers[14].invoiceNo)
      Cypress.env('invoice16',customer.customers[15].invoiceNo)
      Cypress.env('invoice17',customer.customers[16].invoiceNo)
      Cypress.env('invoice18',customer.customers[17].invoiceNo)
      Cypress.env('invoice19',customer.customers[18].invoiceNo)
      Cypress.env('invoice20',customer.customers[19].invoiceNo)
      Cypress.env('invoice21',customer.customers[20].invoiceNo)
      Cypress.env('invoice22',customer.customers[21].invoiceNo)
      Cypress.env('invoice23',customer.customers[22].invoiceNo)
      Cypress.env('invoice24',customer.customers[23].invoiceNo)
      Cypress.env('invoice25',customer.customers[24].invoiceNo)
      Cypress.env('invoice26',customer.customers[25].invoiceNo)
      Cypress.env('invoice27',customer.customers[26].invoiceNo)
      Cypress.env('invoice28',customer.customers[27].invoiceNo)
      Cypress.env('invoice29',customer.customers[28].invoiceNo)
      Cypress.env('invoice30',customer.customers[29].invoiceNo)
      Cypress.env('invoice31',customer.customers[30].invoiceNo)
      Cypress.env('invoice32',customer.customers[31].invoiceNo)
      Cypress.env('invoice33',customer.customers[32].invoiceNo)
      Cypress.env('invoice34',customer.customers[33].invoiceNo)
      Cypress.env('invoice35',customer.customers[34].invoiceNo)
      Cypress.env('invoice36',customer.customers[35].invoiceNo)
      Cypress.env('invoice37',customer.customers[36].invoiceNo)
      Cypress.env('invoice38',customer.customers[37].invoiceNo)
      Cypress.env('invoice39',customer.customers[38].invoiceNo)
      Cypress.env('invoice40',customer.customers[39].invoiceNo)
      Cypress.env('invoice41',customer.customers[40].invoiceNo)
      Cypress.env('invoice42',customer.customers[41].invoiceNo)
      Cypress.env('invoice43',customer.customers[42].invoiceNo)
      Cypress.env('invoice44',customer.customers[43].invoiceNo)
      Cypress.env('invoice45',customer.customers[44].invoiceNo)
      Cypress.env('invoice46',customer.customers[45].invoiceNo)
      Cypress.env('invoice47',customer.customers[46].invoiceNo)
      Cypress.env('invoice48',customer.customers[47].invoiceNo)
      Cypress.env('invoice49',customer.customers[48].invoiceNo)
      Cypress.env('invoice50',customer.customers[49].invoiceNo)
      Cypress.env('PEmail',customer.payees[0].payeeEmail)
      Cypress.env('PPassword',customer.payees[0].payeePassword)

      cy.userLoginDev(Cypress.env('PEmail'),Cypress.env('PPassword')).then((res) => {
        const token = res.body.data.token
        cy.request({
          method: "POST",
          url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/invoice/draft/convert',
          headers: {
            authorization: 'Bearer ' + token
          },
          body: {
            "send_now": false,
            "invoice_ids": [
              Cypress.env('invoice1'),
              Cypress.env('invoice2'),
              Cypress.env('invoice3'),
              Cypress.env('invoice4'),
              Cypress.env('invoice5'),
              Cypress.env('invoice6'),
              Cypress.env('invoice7'),
              Cypress.env('invoice8'),
              Cypress.env('invoice9'),
              Cypress.env('invoice10'),
              Cypress.env('invoice11'),
              Cypress.env('invoice12'),
              Cypress.env('invoice13'),
              Cypress.env('invoice14'),
              Cypress.env('invoice15'),
              Cypress.env('invoice16'),
              Cypress.env('invoice17'),
              Cypress.env('invoice18'),
              Cypress.env('invoice19'),
              Cypress.env('invoice20'),
              Cypress.env('invoice21'),
              Cypress.env('invoice22'),
              Cypress.env('invoice23'),
              Cypress.env('invoice24'),
              Cypress.env('invoice25'),
              Cypress.env('invoice26'),
              Cypress.env('invoice27'),
              Cypress.env('invoice28'),
              Cypress.env('invoice29'),
              Cypress.env('invoice30'),
              Cypress.env('invoice31'),
              Cypress.env('invoice32'),
              Cypress.env('invoice33'),
              Cypress.env('invoice34'),
              Cypress.env('invoice35'),
              Cypress.env('invoice36'),
              Cypress.env('invoice37'),
              Cypress.env('invoice38'),
              Cypress.env('invoice39'),
              Cypress.env('invoice40'),
              Cypress.env('invoice41'),
              Cypress.env('invoice42'),
              Cypress.env('invoice43'),
              Cypress.env('invoice44'),
              Cypress.env('invoice45'),
              Cypress.env('invoice46'),
              Cypress.env('invoice47'),
              Cypress.env('invoice48'),
              Cypress.env('invoice49'),
              Cypress.env('invoice50')
            ],
            "business_id": Cypress.env('business_id')
          }
        })
      })
    })
  })
  // If the script above passes, all 50 invoices (invoice._id stored in the json file)
  // has been converted to an "Active" invoice. Running this script again will not work.

  // Step 3 - Request LoD for all 50 'Active' invoices
  // Note: 
  // 1) Make sure that Step 1 & 2 ran before hand, Or
  // 2) Make sure that all invoice listed in Json file '99.0.0-data.json' 
  //   a) Is still active (not voided), and
  //   b) Doesn't have LoD created
  // Request for LOD
  it.skip("Step 3 - Request LoD for each overdue invoices(50)", () => {
    cy.readFile('cypress/support/99.0.0-data.json').then((customer) => {
      Cypress.env('invoice1',customer.customers[0].invoiceNo)
      Cypress.env('invoice2',customer.customers[1].invoiceNo)
      Cypress.env('invoice3',customer.customers[2].invoiceNo)
      Cypress.env('invoice4',customer.customers[3].invoiceNo)
      Cypress.env('invoice5',customer.customers[4].invoiceNo)
      Cypress.env('invoice6',customer.customers[5].invoiceNo)
      Cypress.env('invoice7',customer.customers[6].invoiceNo)
      Cypress.env('invoice8',customer.customers[7].invoiceNo)
      Cypress.env('invoice9',customer.customers[8].invoiceNo)
      Cypress.env('invoice10',customer.customers[9].invoiceNo)
      Cypress.env('invoice11',customer.customers[10].invoiceNo)
      Cypress.env('invoice12',customer.customers[11].invoiceNo)
      Cypress.env('invoice13',customer.customers[12].invoiceNo)
      Cypress.env('invoice14',customer.customers[13].invoiceNo)
      Cypress.env('invoice15',customer.customers[14].invoiceNo)
      Cypress.env('invoice16',customer.customers[15].invoiceNo)
      Cypress.env('invoice17',customer.customers[16].invoiceNo)
      Cypress.env('invoice18',customer.customers[17].invoiceNo)
      Cypress.env('invoice19',customer.customers[18].invoiceNo)
      Cypress.env('invoice20',customer.customers[19].invoiceNo)
      Cypress.env('invoice21',customer.customers[20].invoiceNo)
      Cypress.env('invoice22',customer.customers[21].invoiceNo)
      Cypress.env('invoice23',customer.customers[22].invoiceNo)
      Cypress.env('invoice24',customer.customers[23].invoiceNo)
      Cypress.env('invoice25',customer.customers[24].invoiceNo)
      Cypress.env('invoice26',customer.customers[25].invoiceNo)
      Cypress.env('invoice27',customer.customers[26].invoiceNo)
      Cypress.env('invoice28',customer.customers[27].invoiceNo)
      Cypress.env('invoice29',customer.customers[28].invoiceNo)
      Cypress.env('invoice30',customer.customers[29].invoiceNo)
      Cypress.env('invoice31',customer.customers[30].invoiceNo)
      Cypress.env('invoice32',customer.customers[31].invoiceNo)
      Cypress.env('invoice33',customer.customers[32].invoiceNo)
      Cypress.env('invoice34',customer.customers[33].invoiceNo)
      Cypress.env('invoice35',customer.customers[34].invoiceNo)
      Cypress.env('invoice36',customer.customers[35].invoiceNo)
      Cypress.env('invoice37',customer.customers[36].invoiceNo)
      Cypress.env('invoice38',customer.customers[37].invoiceNo)
      Cypress.env('invoice39',customer.customers[38].invoiceNo)
      Cypress.env('invoice40',customer.customers[39].invoiceNo)
      Cypress.env('invoice41',customer.customers[40].invoiceNo)
      Cypress.env('invoice42',customer.customers[41].invoiceNo)
      Cypress.env('invoice43',customer.customers[42].invoiceNo)
      Cypress.env('invoice44',customer.customers[43].invoiceNo)
      Cypress.env('invoice45',customer.customers[44].invoiceNo)
      Cypress.env('invoice46',customer.customers[45].invoiceNo)
      Cypress.env('invoice47',customer.customers[46].invoiceNo)
      Cypress.env('invoice48',customer.customers[47].invoiceNo)
      Cypress.env('invoice49',customer.customers[48].invoiceNo)
      Cypress.env('invoice50',customer.customers[49].invoiceNo)

      cy.adminLoginDev('nicholas@intrinsik.ly','Dem0is!123').then((res) => {
        const token = res.body.data.token
        cy.request({
          method: "POST",
          url: 'https://api.ara-pay.com/development/ara/invoice/api/v1/lod/request',
          headers: {
            authorization: 'Bearer ' + token
          },
          body: {
            "invoice_ids": [
              Cypress.env('invoice1'),
              Cypress.env('invoice2'),
              Cypress.env('invoice3'),
              Cypress.env('invoice4'),
              Cypress.env('invoice5'),
              Cypress.env('invoice6'),
              Cypress.env('invoice7'),
              Cypress.env('invoice8'),
              Cypress.env('invoice9'),
              Cypress.env('invoice10'),
              Cypress.env('invoice11'),
              Cypress.env('invoice12'),
              Cypress.env('invoice13'),
              Cypress.env('invoice14'),
              Cypress.env('invoice15'),
              Cypress.env('invoice16'),
              Cypress.env('invoice17'),
              Cypress.env('invoice18'),
              Cypress.env('invoice19'),
              Cypress.env('invoice20'),
              Cypress.env('invoice21'),
              Cypress.env('invoice22'),
              Cypress.env('invoice23'),
              Cypress.env('invoice24'),
              Cypress.env('invoice25'),
              Cypress.env('invoice26'),
              Cypress.env('invoice27'),
              Cypress.env('invoice28'),
              Cypress.env('invoice29'),
              Cypress.env('invoice30'),
              Cypress.env('invoice31'),
              Cypress.env('invoice32'),
              Cypress.env('invoice33'),
              Cypress.env('invoice34'),
              Cypress.env('invoice35'),
              Cypress.env('invoice36'),
              Cypress.env('invoice37'),
              Cypress.env('invoice38'),
              Cypress.env('invoice39'),
              Cypress.env('invoice40'),
              Cypress.env('invoice41'),
              Cypress.env('invoice42'),
              Cypress.env('invoice43'),
              Cypress.env('invoice44'),
              Cypress.env('invoice45'),
              Cypress.env('invoice46'),
              Cypress.env('invoice47'),
              Cypress.env('invoice48'),
              Cypress.env('invoice49'),
              Cypress.env('invoice50')
            ],
            "type": "lod_1"
          }
        })
      })
    })
  })
  // If the script above passes, LoDs were created for all 50 'Active' Overdue invoices
  // LoD Ids are then stored in the Json file.

  // Step 4 - Delete LoD for all 50 'Active' Overdue invoices
  // Note:
  // 1) This is used as a clean up for the dummy data that we created.
  // Going through the script below will delete all the LoD that were created at Step 3
  // This also means that all LoD Ids stored in the Json file is invalid(doesn't exist)
  it.skip("Step 4 - Delete LoD for all 50 'Active' Overdue Invoices", () => {

  })
  // If the script above passes, all 50 LoDs that are for all 50 invoices are deleted.
  // LoD Ids that are stored in the Json file are not valid anymore.
  // Note to self: Make the script remove the id from the Json file.

  // Step 5 - Void all 50 'Active' overdue invoices (Clean Up)
  // Note:
  // 1) This is a clean up stage, aim is to clean up as much dummy data from the front end.
  it.skip("Step 5 - Void all 50 'Active' overdue invoices", () => {

  })
  // If the script above passes, all 50 'Active' Overdue invoices are deleted.
  // Note to self: Make the script remove the id from the Json file.
});

