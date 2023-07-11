describe("Script to test the limit", () => {
  before(() => {
    // Reading from config file > Setting test env variables
    cy.readFile('cypress/support/99.0.0-data.json').then((customer) => {
      // const epoch = Math.round(Date.now() / 1000) // Generating a epoch date
      const epoch = '.10'
      Cypress.env('email1','intrinsiktest+1' + epoch + '@gmail.com')
      Cypress.env('email2','intrinsiktest+2' + epoch + '@gmail.com')
      Cypress.env('email3','intrinsiktest+3' + epoch + '@gmail.com')
      Cypress.env('email4','intrinsiktest+4' + epoch + '@gmail.com')
      Cypress.env('email5','intrinsiktest+5' + epoch + '@gmail.com')
      Cypress.env('email6','intrinsiktest+6' + epoch + '@gmail.com')
      Cypress.env('email7','intrinsiktest+7' + epoch + '@gmail.com')
      Cypress.env('email8','intrinsiktest+8' + epoch + '@gmail.com')
      Cypress.env('email9','intrinsiktest+9' + epoch + '@gmail.com')
      Cypress.env('email10','intrinsiktest+10' + epoch + '@gmail.com')
      Cypress.env('email11','intrinsiktest+11' + epoch + '@gmail.com')
      Cypress.env('email12','intrinsiktest+12' + epoch + '@gmail.com')
      Cypress.env('email13','intrinsiktest+13' + epoch + '@gmail.com')
      Cypress.env('email14','intrinsiktest+14' + epoch + '@gmail.com')
      Cypress.env('email15','intrinsiktest+15' + epoch + '@gmail.com')
      Cypress.env('email16','intrinsiktest+16' + epoch + '@gmail.com')
      Cypress.env('email17','intrinsiktest+17' + epoch + '@gmail.com')
      Cypress.env('email18','intrinsiktest+18' + epoch + '@gmail.com')
      Cypress.env('email19','intrinsiktest+19' + epoch + '@gmail.com')
      Cypress.env('email20','intrinsiktest+20' + epoch + '@gmail.com')
      Cypress.env('email21','intrinsiktest+21' + epoch + '@gmail.com')
      Cypress.env('email22','intrinsiktest+22' + epoch + '@gmail.com')
      Cypress.env('email23','intrinsiktest+23' + epoch + '@gmail.com')
      Cypress.env('email24','intrinsiktest+24' + epoch + '@gmail.com')
      Cypress.env('email25','intrinsiktest+25' + epoch + '@gmail.com')
      Cypress.env('email26','intrinsiktest+26' + epoch + '@gmail.com')
      Cypress.env('email27','intrinsiktest+27' + epoch + '@gmail.com')
      Cypress.env('email28','intrinsiktest+28' + epoch + '@gmail.com')
      Cypress.env('email29','intrinsiktest+29' + epoch + '@gmail.com')
      Cypress.env('email30','intrinsiktest+30' + epoch + '@gmail.com')
      Cypress.env('email31','intrinsiktest+31' + epoch + '@gmail.com')
      Cypress.env('email32','intrinsiktest+32' + epoch + '@gmail.com')
      Cypress.env('email33','intrinsiktest+33' + epoch + '@gmail.com')
      Cypress.env('email34','intrinsiktest+34' + epoch + '@gmail.com')
      Cypress.env('email35','intrinsiktest+35' + epoch + '@gmail.com')
      Cypress.env('email36','intrinsiktest+36' + epoch + '@gmail.com')
      Cypress.env('email37','intrinsiktest+37' + epoch + '@gmail.com')
      Cypress.env('email38','intrinsiktest+38' + epoch + '@gmail.com')
      Cypress.env('email39','intrinsiktest+39' + epoch + '@gmail.com')
      Cypress.env('email40','intrinsiktest+40' + epoch + '@gmail.com')
      Cypress.env('email41','intrinsiktest+41' + epoch + '@gmail.com')
      Cypress.env('email42','intrinsiktest+42' + epoch + '@gmail.com')
      Cypress.env('email43','intrinsiktest+43' + epoch + '@gmail.com')
      Cypress.env('email44','intrinsiktest+44' + epoch + '@gmail.com')
      Cypress.env('email45','intrinsiktest+45' + epoch + '@gmail.com')
      Cypress.env('email46','intrinsiktest+46' + epoch + '@gmail.com')
      Cypress.env('email47','intrinsiktest+47' + epoch + '@gmail.com')
      Cypress.env('email48','intrinsiktest+48' + epoch + '@gmail.com')
      Cypress.env('email49','intrinsiktest+49' + epoch + '@gmail.com')
      Cypress.env('email50','intrinsiktest+50' + epoch + '@gmail.com')
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
  
  it("creates 50 individual customers", () => {
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
            },
            {
              "business_id": Cypress.env('business_id'),
              "first_name": Cypress.env('first_name'),
              "last_name": Cypress.env('last_name'),
              "email": Cypress.env('email21'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '21'),
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
              "email": Cypress.env('email22'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '22'),
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
              "email": Cypress.env('email23'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '23'),
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
              "email": Cypress.env('email24'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '24'),
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
              "email": Cypress.env('email25'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '25'),
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
              "email": Cypress.env('email26'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '26'),
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
              "email": Cypress.env('email27'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '27'),
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
              "email": Cypress.env('email28'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '28'),
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
              "email": Cypress.env('email29'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '29'),
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
              "email": Cypress.env('email30'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '30'),
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
              "email": Cypress.env('email31'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '31'),
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
              "email": Cypress.env('email32'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '32'),
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
              "email": Cypress.env('email33'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '33'),
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
              "email": Cypress.env('email34'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '34'),
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
              "email": Cypress.env('email35'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '35'),
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
              "email": Cypress.env('email36'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '36'),
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
              "email": Cypress.env('email37'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '37'),
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
              "email": Cypress.env('email38'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '38'),
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
              "email": Cypress.env('email39'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '39'),
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
              "email": Cypress.env('email40'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '40'),
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
              "email": Cypress.env('email41'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '41'),
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
              "email": Cypress.env('email42'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '42'),
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
              "email": Cypress.env('email43'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '43'),
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
              "email": Cypress.env('email44'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '44'),
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
              "email": Cypress.env('email45'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '45'),
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
              "email": Cypress.env('email46'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '46'),
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
              "email": Cypress.env('email47'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '47'),
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
              "email": Cypress.env('email48'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '48'),
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
              "email": Cypress.env('email49'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '49'),
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
              "email": Cypress.env('email50'),
              "phone_number": Cypress.env('phone_number'),
              "office_number": Cypress.env('phone_number'),
              "user_type": Cypress.env('user_type'),
              "individual": {
                "short_name": (Cypress.env('short_name') + '50'),
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
        const id1 = xhr.body.data.customers[0]._id
        const id2 = xhr.body.data.customers[1]._id
        const id3 = xhr.body.data.customers[2]._id
        const id4 = xhr.body.data.customers[3]._id
        const id5 = xhr.body.data.customers[4]._id
        const id6 = xhr.body.data.customers[5]._id
        const id7 = xhr.body.data.customers[6]._id
        const id8 = xhr.body.data.customers[7]._id
        const id9 = xhr.body.data.customers[8]._id
        const id10 = xhr.body.data.customers[9]._id
        const id11 = xhr.body.data.customers[10]._id
        const id12 = xhr.body.data.customers[11]._id
        const id13 = xhr.body.data.customers[12]._id
        const id14 = xhr.body.data.customers[13]._id
        const id15 = xhr.body.data.customers[14]._id
        const id16 = xhr.body.data.customers[15]._id
        const id17 = xhr.body.data.customers[16]._id
        const id18 = xhr.body.data.customers[17]._id
        const id19 = xhr.body.data.customers[18]._id
        const id20 = xhr.body.data.customers[19]._id
        const id21 = xhr.body.data.customers[20]._id
        const id22 = xhr.body.data.customers[21]._id
        const id23 = xhr.body.data.customers[22]._id
        const id24 = xhr.body.data.customers[23]._id
        const id25 = xhr.body.data.customers[24]._id
        const id26 = xhr.body.data.customers[25]._id
        const id27 = xhr.body.data.customers[26]._id
        const id28 = xhr.body.data.customers[27]._id
        const id29 = xhr.body.data.customers[28]._id
        const id30 = xhr.body.data.customers[29]._id
        const id31 = xhr.body.data.customers[30]._id
        const id32 = xhr.body.data.customers[31]._id
        const id33 = xhr.body.data.customers[32]._id
        const id34 = xhr.body.data.customers[33]._id
        const id35 = xhr.body.data.customers[34]._id
        const id36 = xhr.body.data.customers[35]._id
        const id37 = xhr.body.data.customers[36]._id
        const id38 = xhr.body.data.customers[37]._id
        const id39 = xhr.body.data.customers[38]._id
        const id40 = xhr.body.data.customers[39]._id
        const id41 = xhr.body.data.customers[40]._id
        const id42 = xhr.body.data.customers[41]._id
        const id43 = xhr.body.data.customers[42]._id
        const id44 = xhr.body.data.customers[43]._id
        const id45 = xhr.body.data.customers[44]._id
        const id46 = xhr.body.data.customers[45]._id
        const id47 = xhr.body.data.customers[46]._id
        const id48 = xhr.body.data.customers[47]._id
        const id49 = xhr.body.data.customers[48]._id
        const id50 = xhr.body.data.customers[49]._id
        cy.readFile('cypress/support/99.0.0-data.json').then((customer) => {
          // Customers email
          customer.customers[0].email = Cypress.env('email1')
          customer.customers[1].email = Cypress.env('email2')
          customer.customers[2].email = Cypress.env('email3')
          customer.customers[3].email = Cypress.env('email4')
          customer.customers[4].email = Cypress.env('email5')
          customer.customers[5].email = Cypress.env('email6')
          customer.customers[6].email = Cypress.env('email7')
          customer.customers[7].email = Cypress.env('email8')
          customer.customers[8].email = Cypress.env('email9')
          customer.customers[9].email = Cypress.env('email10')
          customer.customers[10].email = Cypress.env('email11')
          customer.customers[11].email = Cypress.env('email12')
          customer.customers[12].email = Cypress.env('email13')
          customer.customers[13].email = Cypress.env('email14')
          customer.customers[14].email = Cypress.env('email15')
          customer.customers[15].email = Cypress.env('email16')
          customer.customers[16].email = Cypress.env('email17')
          customer.customers[17].email = Cypress.env('email18')
          customer.customers[18].email = Cypress.env('email19')
          customer.customers[19].email = Cypress.env('email20')
          customer.customers[20].email = Cypress.env('email21')
          customer.customers[21].email = Cypress.env('email22')
          customer.customers[22].email = Cypress.env('email23')
          customer.customers[23].email = Cypress.env('email24')
          customer.customers[24].email = Cypress.env('email25')
          customer.customers[25].email = Cypress.env('email26')
          customer.customers[26].email = Cypress.env('email27')
          customer.customers[27].email = Cypress.env('email28')
          customer.customers[28].email = Cypress.env('email29')
          customer.customers[29].email = Cypress.env('email30')
          customer.customers[30].email = Cypress.env('email31')
          customer.customers[31].email = Cypress.env('email32')
          customer.customers[32].email = Cypress.env('email33')
          customer.customers[33].email = Cypress.env('email34')
          customer.customers[34].email = Cypress.env('email35')
          customer.customers[35].email = Cypress.env('email36')
          customer.customers[36].email = Cypress.env('email37')
          customer.customers[37].email = Cypress.env('email38')
          customer.customers[38].email = Cypress.env('email39')
          customer.customers[39].email = Cypress.env('email40')
          customer.customers[40].email = Cypress.env('email41')
          customer.customers[41].email = Cypress.env('email42')
          customer.customers[42].email = Cypress.env('email43')
          customer.customers[43].email = Cypress.env('email44')
          customer.customers[44].email = Cypress.env('email45')
          customer.customers[45].email = Cypress.env('email46')
          customer.customers[46].email = Cypress.env('email47')
          customer.customers[47].email = Cypress.env('email48')
          customer.customers[48].email = Cypress.env('email49')
          customer.customers[49].email = Cypress.env('email50')
          // Customers ID
          customer.customers[0]._id = id1
          customer.customers[1]._id = id2
          customer.customers[2]._id = id3
          customer.customers[3]._id = id4
          customer.customers[4]._id = id5
          customer.customers[5]._id = id6
          customer.customers[6]._id = id7
          customer.customers[7]._id = id8
          customer.customers[8]._id = id9
          customer.customers[9]._id = id10
          customer.customers[10]._id = id11
          customer.customers[11]._id = id12
          customer.customers[12]._id = id13
          customer.customers[13]._id = id14
          customer.customers[14]._id = id15
          customer.customers[15]._id = id16
          customer.customers[16]._id = id17
          customer.customers[17]._id = id18
          customer.customers[18]._id = id19
          customer.customers[19]._id = id20
          customer.customers[20]._id = id21
          customer.customers[21]._id = id22
          customer.customers[22]._id = id23
          customer.customers[23]._id = id24
          customer.customers[24]._id = id25
          customer.customers[25]._id = id26
          customer.customers[26]._id = id27
          customer.customers[27]._id = id28
          customer.customers[28]._id = id29
          customer.customers[29]._id = id30
          customer.customers[30]._id = id31
          customer.customers[31]._id = id32
          customer.customers[32]._id = id33
          customer.customers[33]._id = id34
          customer.customers[34]._id = id35
          customer.customers[35]._id = id36
          customer.customers[36]._id = id37
          customer.customers[37]._id = id38
          customer.customers[38]._id = id39
          customer.customers[39]._id = id40
          customer.customers[40]._id = id41
          customer.customers[41]._id = id42
          customer.customers[42]._id = id43
          customer.customers[43]._id = id44
          customer.customers[44]._id = id45
          customer.customers[45]._id = id46
          customer.customers[46]._id = id47
          customer.customers[47]._id = id48
          customer.customers[48]._id = id49
          customer.customers[49]._id = id50
          cy.writeFile('cypress/support/99.0.0-data.json',customer)
      })
      })
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
    // cy.readFile('cypress/support/0.0.0-data.json').then((customer) => {
    //     customer.customers[0].email = Cypress.env('email1')
    //     customer.customers[0]._id = 
    //     customer.customers[1].email = Cypress.env('email2')
    //     customer.customers[2].email = Cypress.env('email3')
    //     customer.customers[3].email = Cypress.env('email4')
    //     customer.customers[4].email = Cypress.env('email5')
    //     customer.customers[5].email = Cypress.env('email6')
    //     customer.customers[6].email = Cypress.env('email7')
    //     customer.customers[7].email = Cypress.env('email8')
    //     customer.customers[8].email = Cypress.env('email9')
    //     customer.customers[9].email = Cypress.env('email10')
    //     customer.customers[10].email = Cypress.env('email11')
    //     customer.customers[11].email = Cypress.env('email12')
    //     customer.customers[12].email = Cypress.env('email13')
    //     customer.customers[13].email = Cypress.env('email14')
    //     customer.customers[14].email = Cypress.env('email15')
    //     customer.customers[15].email = Cypress.env('email16')
    //     customer.customers[16].email = Cypress.env('email17')
    //     customer.customers[17].email = Cypress.env('email18')
    //     customer.customers[18].email = Cypress.env('email19')
    //     customer.customers[19].email = Cypress.env('email20')
    //     customer.customers[20].email = Cypress.env('email21')
    //     customer.customers[21].email = Cypress.env('email22')
    //     customer.customers[22].email = Cypress.env('email23')
    //     customer.customers[23].email = Cypress.env('email24')
    //     customer.customers[24].email = Cypress.env('email25')
    //     customer.customers[25].email = Cypress.env('email26')
    //     customer.customers[26].email = Cypress.env('email27')
    //     customer.customers[27].email = Cypress.env('email28')
    //     customer.customers[28].email = Cypress.env('email29')
    //     customer.customers[29].email = Cypress.env('email30')
    //     customer.customers[30].email = Cypress.env('email31')
    //     customer.customers[31].email = Cypress.env('email32')
    //     customer.customers[32].email = Cypress.env('email33')
    //     customer.customers[33].email = Cypress.env('email34')
    //     customer.customers[34].email = Cypress.env('email35')
    //     customer.customers[35].email = Cypress.env('email36')
    //     customer.customers[36].email = Cypress.env('email37')
    //     customer.customers[37].email = Cypress.env('email38')
    //     customer.customers[38].email = Cypress.env('email39')
    //     customer.customers[39].email = Cypress.env('email40')
    //     customer.customers[40].email = Cypress.env('email41')
    //     customer.customers[41].email = Cypress.env('email42')
    //     customer.customers[42].email = Cypress.env('email43')
    //     customer.customers[43].email = Cypress.env('email44')
    //     customer.customers[44].email = Cypress.env('email45')
    //     customer.customers[45].email = Cypress.env('email46')
    //     customer.customers[46].email = Cypress.env('email47')
    //     customer.customers[47].email = Cypress.env('email48')
    //     customer.customers[48].email = Cypress.env('email49')
    //     customer.customers[49].email = Cypress.env('email50')
    //     cy.writeFile('cypress/support/0.0.0-data.json',customer)
    // })
  });
});

