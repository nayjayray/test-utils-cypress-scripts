const path = require("path");
const gmail = require("gmail-tester");

module.exports = {
  projectId: 'dor4sz',
  video: false,
  screenshotOnRunFailure: false,
  viewportHeight: 850,
  viewportWidth: 1200,
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        "gmail:check-email": async (args) => {
            const { from, to, subject, credential, token } = args;
            const email = await gmail.check_inbox(
              path.resolve(credential),
              path.resolve(token),
              {
                subject: subject,
                from: from,
                to: to,
                include_body: true,
                wait_time_sec: 10,
                max_wait_time_sec: 30,
              }
            );
            return email;
          },
          "gmail:refresh_token": async (args) => {
            const { credential, token } = args;
            const refresh = await gmail.refresh_access_token(
                path.resolve(credential),
                path.resolve(token),
              );
            return null;
          }
      })
    }
  },
};
