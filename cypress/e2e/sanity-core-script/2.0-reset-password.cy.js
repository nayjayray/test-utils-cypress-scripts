describe('[Reset] Password Reset via reset link from ARA.', () => {
  before(() => {
    // Pre-steps, reading variables from json file.
    const json = "cypress/support/sanity-test-json/env-variable.json"
    
    Cypress.env('json',json)
    cy.readFile(json).then((data) => {
      cy.log(data.credential)
      cy.log(data.token)
      cy.task('gmail:refresh_token', {
        credential: data.intrinsikcypress.credential,
        token: data.intrinsikcypress.token
      })
    })
  })

  // Start of test script
  it('Visit ARA site as an existing user, initiate password reset.', () => {
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
        cy.get("input").type(data.intrinsikcypress.email);
        // Click on check email button
        cy.get("button").click("center");
        cy.wait("@check-email")
        // Sign In button
        cy.get('button:nth-of-type(1)')
          .contains('Sign in')
          .and('be.visible')
        // Cancel button
        cy.get('button:nth-of-type(2)')
          .contains('Cancel')
          .and('be.visible')
        // Forgot Password link to redirect
        cy.get('div:nth-of-type(4) > span')
          .contains('Forgot password')
          .and('be.visible')
          .click()
        
        // Email field should be blocked
        cy.get('input')
          .should('have.attr','disabled','disabled')
          .and('have.attr','value',data.intrinsikcypress.email)
        // Cancel button remains unchanged
        cy.get('button:nth-of-type(2)')
          .contains('Cancel')
          .and('be.visible')
        // Button change to "Forgot Password"
        cy.get('button:nth-of-type(1)')
          .contains('Forgot password')
          .and('be.visible')
          .click()

        // Notification block
        cy.get("div[role='alert']").within(() => {
          cy.get("div:nth-of-type(1) > svg")
            .should('have.attr','data-testid','SuccessOutlinedIcon')
            .and('be.visible')
          
          cy.get('div:nth-of-type(2)')
            .contains('Please check your email to reset your password')
            .and('be.visible')

          cy.get('div:nth-of-type(2) > div')
            .contains('A reset password link is sent to your email')
            .and('be.visible')
        })
      });
      
      // track the notification on top right
      cy.get('.notistack-SnackbarContainer').within(() => {
        cy.get('div#notistack-snackbar')
          .contains('Please check your email to reset your password')
          .and('be.visible')
        // Dismissing it to clear the space/area
        cy.get('button')
          .contains('Dismiss')
          .click()
      })

      // track the form again
      cy.get('form').within(() => {
        cy.get('button:nth-of-type(1)')
          .contains('Forgot password')
          .should('have.attr','disabled','disabled')
          .and('have.class','Mui-disabled')
        cy.get('button:nth-of-type(2)')
          .contains('Cancel')
          .and('be.visible')
      })
    })
  })

  // Second part
  it.only('Receives and email with magic link, click on it to login to ARA.', () => {
    cy.readFile(Cypress.env('json')).then((data) => {
      // look for email with link
      cy.task('gmail:check-email', {
        from: data.support_email,
        to: data.intrinsikcypress.email,
        subject: data.emails.reset_password,
        credential: data.intrinsikcypress.credential,
        token: data.intrinsikcypress.token
      }).then((email) => {
        const html = email[0].body.html
        cy.document({log : false}).invoke({log:false},"write",html)
      }).then(() => {
        cy.get("a")
          .contains("Reset Password")
          .invoke("attr",'href')
          .then((href) => {
            data.reset_password = href
            cy.writeFile(Cypress.env('json'), data)
          })
      })
    })
    cy.readFile(Cypress.env('json')).then((data) => {
      cy.visit(data.reset_password)
      cy.url()
        .should('include',data.reset_password)
      // Page content
      cy.get('div#root > div').within(() => {
        // Ara Logo
        cy.get('div:nth-of-type(2) > div > img')
          .should('have.attr','src','/images/ara-app-logo.webp')
          .and('be.visible')
        // Content Body under logo
        cy.get('div:nth-of-type(2) > div > div').within(() => {
          // Reset password
          cy.get('h4')
            .contains('Reset password')
            .and('be.visible')
          // Enter your details below
          cy.get('p')
            .contains('Enter your details below')
            .and('be.visible')
        })

        // Form (Input fields + buttons)
        cy.get('form > div:nth-of-type(1)').within(() => {
          cy.get('label')
            .contains('Password')
            .and('be.visible')
          cy.get('input')
            .should('have.attr','type','password')
            .and('have.value','')
            .type(data.intrinsikcypress.password)
            .should('have.value',data.intrinsikcypress.password)
        })
        cy.get('form > div:nth-of-type(3)').within(() => {
          cy.get('label')
            .contains('Confirm Password')
            .and('be.visible')
          cy.get('input')
            .should('have.attr','type','password')
            .and('have.value','')
            .type(data.intrinsikcypress.password)
            .should('have.value',data.intrinsikcypress.password)
        })
        cy.get('form > button:nth-of-type(2)')
          .contains('Cancel')
          .should('be.visible')
        cy.get('form > button:nth-of-type(1)')
          .contains('Reset password')
          .should('be.visible')
          .click()
      })

      // track the notification on top right
      cy.get('.notistack-SnackbarContainer').within(() => {
        cy.get('div#notistack-snackbar')
          .contains('Password reset successfully, login with your new password to continue')
          .and('be.visible')
        // Dismissing it to clear the space/area
        cy.get('button')
          .contains('Dismiss')
          .click()
      })

      cy.get("form").within(() => {
        // To make sure the check-email api returns a response then only move on to the next step
        cy.intercept(
          "POST",
          "https://api.ara-pay.com/ara/auth/api/v1/auth/check-email"
        ).as("check-email");
        // input the user's email
        cy.get("input").type(data.intrinsikcypress.email);
        // Click on check email button
        cy.get("button").click("center");
        cy.wait("@check-email")
        // password input field
        cy.get('div:nth-of-type(3) > div > input')
          .type(data.intrinsikcypress.password)
          .should('have.value',data.intrinsikcypress.password)
        // Sign In button
        cy.get('button:nth-of-type(1)')
          .contains('Sign in')
          .and('be.visible')
          .click()
      });

      // track the notification on top right
      cy.get('.notistack-SnackbarContainer').within(() => {
        cy.get('div#notistack-snackbar')
          .contains('Login Succesfully')
          .and('be.visible')
        // Dismissing it to clear the space/area
        cy.get('button')
          .contains('Dismiss')
          .click()
      })

      // Header
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
              .should('have.attr','data-testid','WorkRoundedIcon')
            cy.get('div > div > p')
              .contains('Intrinsik Cypress')
              .and('be.visible')
            cy.get('div > div > h6')
              .contains('intrinsikcypress@gmail.com')
              .and('be.visible')
            cy.get('div > div > div > span')
              .contains('Verified')
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
              .click()
          })
        })
      })
    })
  })
})