describe("Script to test the limit", () => {
  before(() => {
    // Reading from config file > Setting test env variables
    cy.readFile('cypress/support/0.0.1-customers-20.json').then((customer) => {
      // const epoch = Math.round(Date.now() / 1000) // Generating a epoch date
      const epoch = '1'
      Cypress.env('email1','intrinsiktest+1.' + epoch + '@gmail.com')
      Cypress.env('email2','intrinsiktest+2.' + epoch + '@gmail.com')
      Cypress.env('email3','intrinsiktest+3.' + epoch + '@gmail.com')
      Cypress.env('email4','intrinsiktest+4.' + epoch + '@gmail.com')
      Cypress.env('email5','intrinsiktest+5.' + epoch + '@gmail.com')
      Cypress.env('email6','intrinsiktest+6.' + epoch + '@gmail.com')
      Cypress.env('email7','intrinsiktest+7.' + epoch + '@gmail.com')
      Cypress.env('email8','intrinsiktest+8.' + epoch + '@gmail.com')
      Cypress.env('email9','intrinsiktest+9.' + epoch + '@gmail.com')
      Cypress.env('email10','intrinsiktest+10.' + epoch + '@gmail.com')
      Cypress.env('email11','intrinsiktest+11.' + epoch + '@gmail.com')
      Cypress.env('email12','intrinsiktest+12.' + epoch + '@gmail.com')
      Cypress.env('email13','intrinsiktest+13.' + epoch + '@gmail.com')
      Cypress.env('email14','intrinsiktest+14.' + epoch + '@gmail.com')
      Cypress.env('email15','intrinsiktest+15.' + epoch + '@gmail.com')
      Cypress.env('email16','intrinsiktest+16.' + epoch + '@gmail.com')
      Cypress.env('email17','intrinsiktest+17.' + epoch + '@gmail.com')
      Cypress.env('email18','intrinsiktest+18.' + epoch + '@gmail.com')
      Cypress.env('email19','intrinsiktest+19.' + epoch + '@gmail.com')
      Cypress.env('email20','intrinsiktest+20.' + epoch + '@gmail.com')
      Cypress.env('business_id',customer.payees[0].businessId)
      Cypress.env('first_name',customer.customerDetails.firstName)
      Cypress.env('last_name',customer.customerDetails.lastName)
      Cypress.env('phone_number',customer.customerDetails.phoneNumber)
      Cypress.env('user_type',customer.customerDetails.userType)
      Cypress.env('biz_name',customer.customerDetails.bizName)
      Cypress.env('short_name',customer.customerDetails.shortName)
      Cypress.env('type',customer.customerDetails.type)
      Cypress.env('address_line_1',customer.customerDetails.addressLine1)
      Cypress.env('address_line_2',customer.customerDetails.addressLine2)
      Cypress.env('city',customer.customerDetails.city)
      Cypress.env('state',customer.customerDetails.state)
      Cypress.env('postcode',customer.customerDetails.postcode)
      Cypress.env('country_code',customer.customerDetails.countryCode)
      Cypress.env('userToken',customer.customerDetails.userToken)
    })
  })
  
  it("creates > deactivates 20 individual customers", () => {
    cy.adminLogin('nicholas@intrinsik.ly','Dem0is!123').then((res) => {
      const adminToken = res.body.data.token
      // Creates 20 customers in one shot
      cy.request({
        method: "POST",
        url: 'https://api.ara-pay.com/development/ara/user/api/v1/customer/admin/create/many',
        headers: {
          authorization: 'Bearer ' + adminToken
        },
        body: {
          "customers": [
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email1'),
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
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email2'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '2'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email3'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '3'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email4'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '4'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email5'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '5'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email6'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '6'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email7'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '7'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email8'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '8'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email9'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '9'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email10'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '10'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email11'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '11'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email12'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '12'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email13'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '13'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email14'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '14'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email15'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '15'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email16'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '16'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email17'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '17'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email18'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '18'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email19'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '19'),
                "address_line_1": Cypress.env('address_line_1'),
                "address_line_2": Cypress.env('address_line_2'),
                "city": Cypress.env('city'),
                "state": Cypress.env('state'),
                "postcode": Cypress.env('postcode'),
                "country_code": Cypress.env('country_code')
              }
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email20'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '20'),
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
      });
      // .then((response) => {
      //   const id_1 = response.body.data.customers[0]._id
      //   const id_2 = response.body.data.customers[1]._id
      //   const id_3 = response.body.data.customers[2]._id
      //   const id_4 = response.body.data.customers[3]._id
      //   const id_5 = response.body.data.customers[4]._id
      //   const id_6 = response.body.data.customers[5]._id
      //   const id_7 = response.body.data.customers[6]._id
      //   const id_8 = response.body.data.customers[7]._id
      //   const id_9 = response.body.data.customers[8]._id
      //   const id_10 = response.body.data.customers[9]._id
      //   const id_11 = response.body.data.customers[10]._id
      //   const id_12 = response.body.data.customers[11]._id
      //   const id_13 = response.body.data.customers[12]._id
      //   const id_14 = response.body.data.customers[13]._id
      //   const id_15 = response.body.data.customers[14]._id
      //   const id_16 = response.body.data.customers[15]._id
      //   const id_17 = response.body.data.customers[16]._id
      //   const id_18 = response.body.data.customers[17]._id
      //   const id_19 = response.body.data.customers[18]._id
      //   const id_20 = response.body.data.customers[19]._id

      //   Cypress.env('customer1',id_1)
      //   Cypress.env('customer2',id_2)
      //   Cypress.env('customer3',id_3)
      //   Cypress.env('customer4',id_4)
      //   Cypress.env('customer5',id_5)
      //   Cypress.env('customer6',id_6)
      //   Cypress.env('customer7',id_7)
      //   Cypress.env('customer8',id_8)
      //   Cypress.env('customer9',id_9)
      //   Cypress.env('customer10',id_10)
      //   Cypress.env('customer11',id_11)
      //   Cypress.env('customer12',id_12)
      //   Cypress.env('customer13',id_13)
      //   Cypress.env('customer14',id_14)
      //   Cypress.env('customer15',id_15)
      //   Cypress.env('customer16',id_16)
      //   Cypress.env('customer17',id_17)
      //   Cypress.env('customer18',id_18)
      //   Cypress.env('customer19',id_19)
      //   Cypress.env('customer20',id_20)

      //   // Deactivate Customer 1
      //   const url1 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer1'))
      //   cy.request({
      //     method: "PUT",
      //     url: url1,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 2
      //   const url2 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer2'))
      //   cy.request({
      //     method: "PUT",
      //     url: url2,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 3
      //   const url3 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer3'))
      //   cy.request({
      //     method: "PUT",
      //     url: url3,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 4
      //   const url4 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer4'))
      //   cy.request({
      //     method: "PUT",
      //     url: url4,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 5
      //   const url5 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer5'))
      //   cy.request({
      //     method: "PUT",
      //     url: url5,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 6
      //   const url6 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer6'))
      //   cy.request({
      //     method: "PUT",
      //     url: url6,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 7
      //   const url7 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer7'))
      //   cy.request({
      //     method: "PUT",
      //     url: url7,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 8
      //   const url8 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer8'))
      //   cy.request({
      //     method: "PUT",
      //     url: url8,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 9
      //   const url9 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer9'))
      //   cy.request({
      //     method: "PUT",
      //     url: url9,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 10
      //   const url10 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer10'))
      //   cy.request({
      //     method: "PUT",
      //     url: url10,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 11
      //   const url11 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer11'))
      //   cy.request({
      //     method: "PUT",
      //     url: url11,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 12
      //   const url12 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer12'))
      //   cy.request({
      //     method: "PUT",
      //     url: url12,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 13
      //   const url13 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer13'))
      //   cy.request({
      //     method: "PUT",
      //     url: url13,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 14
      //   const url14 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer14'))
      //   cy.request({
      //     method: "PUT",
      //     url: url14,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 15
      //   const url15 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer15'))
      //   cy.request({
      //     method: "PUT",
      //     url: url15,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 16
      //   const url16 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer16'))
      //   cy.request({
      //     method: "PUT",
      //     url: url16,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 17
      //   const url17 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer17'))
      //   cy.request({
      //     method: "PUT",
      //     url: url17,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 18
      //   const url18 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer18'))
      //   cy.request({
      //     method: "PUT",
      //     url: url18,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 19
      //   const url19 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer19'))
      //   cy.request({
      //     method: "PUT",
      //     url: url19,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });

      //   // Deactivate Customer 20
      //   const url20 = (Cypress.env('stagUserApi') + Cypress.env('cusDeactivateCustomerById') + Cypress.env('customer20'))
      //   cy.request({
      //     method: "PUT",
      //     url: url2,
      //     headers: {
      //       authorization: Cypress.env('userToken')
      //     }
      //   }).then((res) => {
      //     expect(res.status).to.eq(200)
      //     expect(res.statusText).to.eq("OK")
      //   });
      // })
    })
    // cy.readFile('cypress/support/0.0.1-customers-20.json').then((customer) => {
    //     customer.customerDetails.email1 = Cypress.env('email1')
    //     customer.customerDetails.email2 = Cypress.env('email2')
    //     customer.customerDetails.email3 = Cypress.env('email3')
    //     customer.customerDetails.email4 = Cypress.env('email4')
    //     customer.customerDetails.email5 = Cypress.env('email5')
    //     customer.customerDetails.email6 = Cypress.env('email6')
    //     customer.customerDetails.email7 = Cypress.env('email7')
    //     customer.customerDetails.email8 = Cypress.env('email8')
    //     customer.customerDetails.email9 = Cypress.env('email9')
    //     customer.customerDetails.email10 = Cypress.env('email10')
    //     customer.customerDetails.email11 = Cypress.env('email11')
    //     customer.customerDetails.email12 = Cypress.env('email12')
    //     customer.customerDetails.email13 = Cypress.env('email13')
    //     customer.customerDetails.email14 = Cypress.env('email14')
    //     customer.customerDetails.email15 = Cypress.env('email15')
    //     customer.customerDetails.email16 = Cypress.env('email16')
    //     customer.customerDetails.email17 = Cypress.env('email17')
    //     customer.customerDetails.email18 = Cypress.env('email18')
    //     customer.customerDetails.email19 = Cypress.env('email19')
    //     customer.customerDetails.email20 = Cypress.env('email20')
    //     cy.writeFile('cypress/support/0.0.1-customers-20.json',customer)
    // })
  });
});

