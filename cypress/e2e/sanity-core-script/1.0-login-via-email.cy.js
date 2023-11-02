describe('[Magic Link] Login via magic link from ARA.', () => {
  before(() => {
    // Pre-steps, reading variables from json file.
    const json = "cypress/support/sanity-test-json/env-variable.json"
    
    Cypress.env('json',json)
    cy.readFile(json).then((data) => {
      cy.log(data.credential)
      cy.log(data.token)
      cy.task('gmail:refresh_token', {
        credential: data.arasanity.credential,
        token: data.arasanity.token
      })
    })
  })

  // Start of test script
  it('Visit ARA site as a new payer, they request for magic link.', () => {
    cy.readFile(Cypress.env('json')).then((data) => {
      cy.visit("https://user.ara-app.com/auth");
      // get the login form
      cy.get("form").within(() => {
        // To make sure the check-email api returns a response then only move on to the next step
        cy.intercept(
          "POST",
          "https://api.ara-pay.com/ara/auth/api/v1/auth/check-email"
        ).as("check-email");
        // input the user's email
        cy.get("input").type(data.arasanity.email);
        // Click on check email button
        cy.get("button").click("center");
        cy.wait("@check-email")
        cy.get("div[role='alert']").within(() => {
          cy.get("div:nth-of-type(1) > svg")
            .should('have.attr','data-testid','InfoOutlinedIcon')
            .and('be.visible')
          
          cy.get('div:nth-of-type(2)')
            .contains('You did not set a password for your account. You may request a magic link to sign into your account.')
            .and('be.visible')

          cy.get('div:nth-of-type(2) > div')
            .contains('Password not set')
            .and('be.visible')
        })

        cy.get('button:nth-of-type(1)')
          .contains('Sign in with magic link')
          .and('be.visible')
          .click()
      });

      // track the notification on top right
      cy.get('.notistack-SnackbarContainer').within(() => {
        cy.get('div#notistack-snackbar')
          .contains('Please check your email and sign into your account with magic link')
          .and('be.visible')
        // Dismissing it to clear the space/area
        cy.get('button')
          .contains('Dismiss')
          .click()
      })

      cy.get("form").within(() => {
        cy.get("div[role='alert']").within(() => {
          cy.get("div:nth-of-type(1) > svg")
            .should('have.attr','data-testid','SuccessOutlinedIcon')
            .and('be.visible')
          
          cy.get('div:nth-of-type(2)')
            .contains('You did not set password for your account. You can login to your account by clicking Sign In With Magic Link on your email')
            .and('be.visible')

          cy.get('div:nth-of-type(2) > div')
            .contains('A magic link is sent to your email')
            .and('be.visible')
        })

        cy.get('button:nth-of-type(1)')
          .contains('Sign in with magic link')
          .and('have.class','Mui-disabled')
      });
    })
  })

  // Second part
  it('Receives and email with magic link, click on it to login to ARA.', () => {
    cy.readFile(Cypress.env('json')).then((data) => {
      // look for email with link
      cy.task('gmail:check-email', {
        from: data.support_email,
        to: data.arasanity.email,
        subject: data.emails.magic_link,
        credential: data.arasanity.credential,
        token: data.arasanity.token
      }).then((email) => {
        const html = email[0].body.html
        cy.document({log : false}).invoke({log:false},"write",html)
      }).then(() => {
        cy.get("a")
          .contains("Magic Link")
          .invoke("attr",'href')
          .then((href) => {
            data.magic_link = href
            cy.writeFile(Cypress.env('json'), data)
          })
      })
    })
    cy.readFile(Cypress.env('json')).then((data) => {
      cy.visit(data.magic_link)

      // A successful message will be displayed on the top-right corner
      cy.get('.notistack-SnackbarContainer').within(() => {
        cy.get('div#notistack-snackbar')
          .contains('Verification Succesful. Signed in to arasanity@gmail.com')
          .and('be.visible')
        cy.get('button')
          .contains('Dismiss')
          .click()
      })
      // Set password dialogue
      cy.get("body > div[role='presentation']").within(() => {
        cy.get('form').within(() => {
          cy.get('h2')
            .contains('No password set')
            .and('be.visible')
          // Skip password set up button
          cy.get('div > button')
            .contains('Skip for now')
            .click()
        })
      })

      // Set password for account dialogue box
      cy.get('div#root > div > header').within(() => {
        // New Invoice button
        cy.get('div > div:nth-of-type(2) > button:nth-of-type(1)')
          .contains('New Invoice')
          .within(() => {
            cy.get('svg')
              .should('have.attr','data-testid','AddIcon')
              .and('be.visible')
          })
        // Ask ARA button
        cy.get('div > div:nth-of-type(2) > button:nth-of-type(2)')
          .contains('Ask Ara')
          .within(() => {
            cy.get('svg')
              .should('have.attr','xmlns','http://www.w3.org/2000/svg')
              .and('be.visible')
          })
        // User Icon
        cy.get('div > div:nth-of-type(2) > button:nth-of-type(3)')
          .click()
      })

      // User details dropdown
      cy.get("body > div[role='presentation']").within(() => {
        cy.get('div:nth-of-type(3)').within(() => {
          // User details
          cy.get('ul:nth-of-type(1) > li').within(() => {
            cy.get('div > div > svg')
              .should('have.attr','data-testid','PersonRoundedIcon')
            cy.get('div > div > p')
              .contains('Ara Sanity Payer')
              .and('be.visible')
            cy.get('div > div > h6')
              .contains('arasanity@gmail.com')
              .and('be.visible')
            cy.get('div > div > div > span')
              .contains('Individual')
              .and('be.visible')
          })
          // Open Business Account
          cy.get('ul:nth-of-type(2) > li').within(() => {
            cy.get('div > div > svg')
              .should('have.attr','data-testid','AddIcon')
              .and('be.visible')
            cy.get('div > span')
              .contains('Open Business Account')
              .and('be.visible')
          })
          // Sign out button
          cy.get('ul:nth-of-type(3) > li').within(() => {
            cy.get('div > div > svg')
              .should('have.attr','data-testid','ExitToAppTwoToneIcon')
              .and('be.visible')
            cy.get('div > div > span')
              .contains('Sign out')
              .and('be.visible')
          })
        })
      })
    })
  })
})