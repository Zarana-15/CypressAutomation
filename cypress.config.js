const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  projectId: "fywpkw",
  reporter: 'mochawesome',
  retries:{
    runMode:1,
    openMode:1
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",cucumber())
    },
    specPattern: "cypress/integration/**/*.{js,feature}",
  },
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  }
})
