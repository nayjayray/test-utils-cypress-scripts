// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// Login with Dev Admin
Cypress.Commands.add('adminLoginDev',(email, password) => {
  cy.request({
    method: "POST",
    url: 'https://api.ara-pay.com/development/ara/auth/api/v1/admin/login',
    failOnStatusCode: false,
    body: {
      "email": email,
      "password": password
    }
  })
});
// Login with Staging Admin
Cypress.Commands.add('adminLoginTest',(email, password) => {
  cy.request({
    method: "POST",
    url: 'https://api.ara-pay.com/staging/ara/auth/api/v1/admin/login',
    failOnStatusCode: false,
    body: {
      "email": email,
      "password": password
    }
  })
});
// Login with Development Payee
Cypress.Commands.add('userLoginDev',(email, password) => {
  cy.request({
    method: "POST",
    url: 'https://api.ara-pay.com/development/ara/auth/api/v1/auth/login',
    failOnStatusCode: false,
    body: {
      "email": email,
      "password": password
    }
  })
})
// Login with Staging Payee
Cypress.Commands.add('userLoginTest',(email, password) => {
  cy.request({
    method: "POST",
    url: 'https://api.ara-pay.com/staging/ara/auth/api/v1/auth/login',
    failOnStatusCode: false,
    body: {
      "email": email,
      "password": password
    }
  })
})
// Generate date
Cypress.Commands.add('date_dd_mm_yy', () => {
  const d = new Date(Date.now())
  const day = d.getDate().toString().padStart(2,"0")
  const month = (d.getMonth() + 1).toString().padStart(2,'0')
  const year = d.getFullYear().toString().slice(-2)
  const date = day + '.' + month + '.' + year
  return date;
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })