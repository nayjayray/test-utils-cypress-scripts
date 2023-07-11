describe("Test file to test stuff with", () => {
  it("Test script", () => {
    // Script to generate 50 different emails
    // function generateEmails() {
    //   var emails = [];
    
    //   for (var i = 1; i <= 50; i++) {
    //     var emailNumber = i;
    //     if (i > 50 - 3) {
    //       emailNumber = i - (50 - 3);
    //     }
    //     var email = 'intrinsiktest' + emailNumber + '@gmail.com';
    //     emails.push(email);
    //   }
    
    //   return emails;
    // }
    
    // var generatedEmails = generateEmails();
    // console.log(generatedEmails);
    function generateEmails() {
      var emails = [];
      
      while (emails.length < 50) {
        for (var i = 1; i <= 50; i++) {
          var emailNumber = i;
          var email = 'intrinsiktest+' + emailNumber + '@gmail.com';
          emails.push(email);
        }
      }
      
      return emails;
    }
    
    var generatedEmails = generateEmails()

    function processEmail(generatedEmails) {
      // Custom function to process each email
      cy.log('Processing email:', generatedEmails);
      // Add your custom logic here
    }
    
    generatedEmails.forEach(function(generatedEmails) {
      processEmail(generatedEmails);
    });

    // Test for generating epoch dates
    // const d = new Date(Date.now())
    // const day = d.getDate().toString().padStart(2,"0")
    // const month = (d.getMonth() + 1).toString().padStart(2,'0')
    // const year = d.getFullYear().toString().slice(-2)
    // const date = day + '.' + month + '.' + year

    // console.log(date)
    // const epoch = Math.round(Date.now() / 1000)
    // cy.date_dd_mm_yy().then((date) => {
    //   const email = "intrinsiktest+1_" + date +'@gmail.com'
    //   console.log(email)
    // })
  

    // Test for reading a variable from a file
    // cy.readFile('cypress/support/0.0.1-data.json').then((users) => {
    //   const payee1Id = users.payees[0].id
    //   const customer_one_email = users.customers[0].email
    //   const customer_two_email = users.customers[1].email
    //   console.log(payee1Id)
    //   console.log(customer_one_email)
    //   console.log(customer_two_email)
    // })
  })
})