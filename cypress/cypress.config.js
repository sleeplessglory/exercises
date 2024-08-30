const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: { //added by Cypress when the 1st E2E test is created
    baseUrl: "http://localhost:3000", //setting base URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: { //added by Cypress when the 1st Component test is created
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
