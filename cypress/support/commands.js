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
Cypress.Commands.add("araLoginFeTest", (email, password) => {
  cy.visit("https://test.ara-app.com/auth");
  // get the login form
  cy.get("form").within(() => {
    // To make sure the check-email api returns a response then only move on to the next step
    cy.intercept(
      "POST",
      "https://api.ara-pay.com/staging/ara/auth/api/v1/auth/check-email"
    ).as("check-email");
    // input the user's email
    cy.get("input").type(email);
    // Click on check email button
    cy.get("button").click("center");
    // input password to login
    cy.wait("@check-email").then(() => {
      cy.get("[data-cy='password']").within(() => {
        cy.get("input").type(password);
      });
    });
    // intercept the login API for a response
    cy.intercept(
      "POST",
      "https://api.ara-pay.com/staging/ara/auth/api/v1/auth/login"
    ).as("login");
    cy.get("[data-cy='signin_btn']").click("center");
    cy.wait("@login");
  });
  // Intercepting the Payex onboarding status check and waiting for the response
  cy.intercept(
    "POST",
    "https://api.ara-pay.com/staging/ara/payment/api/v1/payex/get/onboarding_status"
  ).as("getOnboardingStatus");
  cy.wait("@getOnboardingStatus");
});

Cypress.Commands.add("araLoginFeLive", (email, password) => {
  cy.visit("https://user.ara-app.com/auth");
  // get the login form
  cy.get("form").within(() => {
    // To make sure the check-email api returns a response then only move on to the next step
    cy.intercept(
      "POST",
      "https://api.ara-pay.com/ara/auth/api/v1/auth/check-email"
    ).as("check-email");
    // input the user's email
    cy.get("input").type(email);
    // Click on check email button
    cy.get("button").click("center");
    // input password to login
    cy.wait("@check-email").then(() => {
      cy.get("[data-cy='password']").within(() => {
        cy.get("input").type(password);
      });
    });
    // intercept the login API for a response
    cy.intercept(
      "POST",
      "https://api.ara-pay.com/ara/auth/api/v1/auth/login"
    ).as("login");
    cy.get("[data-cy='signin_btn']").click("center");
    cy.wait("@login");
  });
  // Intercepting the Payex onboarding status check and waiting for the response
  cy.intercept(
    "POST",
    "https://api.ara-pay.com/ara/payment/api/v1/payex/get/onboarding_status"
  ).as("getOnboardingStatus");
  cy.wait("@getOnboardingStatus");
});

// New customer data by versioning
Cypress.Commands.add("newDataVersion", (json) => {
  // read from json file
  cy.readFile(json).then((data) => {
    
    const today = new Date();
    const overdue = new Date();
    overdue.setDate(today.getDate() + 30);
    const mshort = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const mshort2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    // converting dat to 2 digit
    const currentDay = today.getDate();
    const fday = currentDay < 10 ? `0${currentDay}` : `${currentDay}`;
    // converting month to 2 digit
    const currentMonth = today.getMonth() + 1;
    const fmonth = currentMonth < 10 ? `0${currentMonth}` : `${currentMonth}`;
    // converting year to 2 digit
    const fullYear = today.getFullYear();
    const twoDigitYear = fullYear % 100;
    const fyear = twoDigitYear < 10 ? `0${twoDigitYear}` : twoDigitYear.toString();

    // epoch (up till the second)
    const epoch = Math.floor(today.getTime() / 1000);

    const date = today.getDate() + "-" + mshort[today.getMonth()] + "-" + today.getFullYear();
    console.log(date);
    const dueDate = overdue.getDate() + " " + mshort2[overdue.getMonth()]

    console.log(dueDate)

    // increase customer versioning
    const cver = epoch;
    // increase invoice versioning
    const iver = fday + fmonth + fyear;

    // create new version of customer details
    const email = data.customer.prefix1 + cver + data.customer.domain;
    const newEmail = data.customer.prefix2 + cver + data.customer.domain;
    const lastName = data.customer.last + iver;
    const newLastName = data.customer.newLast + iver;
    const bizName = data.customer.biz + cver;
    const newBizName = data.customer.newBiz + cver;
    const dupeName = data.customer.dupe + iver;
    const shortName = data.customer.short + iver;
    const newShortName = data.customer.newShort + iver;

    
    // create new version of invoice number
    const invoiceActive = data.invoice.invActiveName + iver;
    const invoiceDraft = data.invoice.invDraftName + iver;

    // prepare to write new version of data back into json file
    data.customer.version = cver;
    data.customer.email = email;
    data.customer.newEmail = newEmail;
    data.customer.lastName = lastName;
    data.customer.newLastName = newLastName;
    data.customer.bizName = bizName;
    data.customer.newBizName = newBizName;
    data.customer.dupeName = dupeName;
    data.customer.shortName = shortName;
    data.customer.newShortName = newShortName;
    data.invoice.version = iver;
    data.invoice.invActive = invoiceActive;
    data.invoice.invDraft = invoiceDraft;
    data.invoice.due = dueDate;
    // replace existing value with new value
    cy.writeFile(json, data);
  });
});

// New customer email based on date [Not complete]
Cypress.Commands.add("newCustomerDate", (json) => {
  // read from json file
  cy.readFile(json).then((data) => {
    // increase versioning
    var ver = data.customer.version + 1;
    // create email in new versioning
    const email = data.customer.prefix + ver + data.customer.domain;
    // prepare to write data back into json file
    data.customer.email = email;
    data.customer.version = ver;
    // replace existing value with new value
    cy.writeFile(json, data);
  });
});
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
