const { defineConfig } = require("cypress");

const environments = {
  production: {
    apiBaseUrl: "https://jsonplaceholder.typicode.com/",
    uiBaseUrl: "https://todomvc.com/examples/react/dist/#/active/",
  },
}

module.exports = defineConfig({
  allowCypressEnv: false,

  video: false,
  screenshotOnRunFailure: true,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions:{
    reportDir: 'cypress/reports/mochawesome',
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
  },

  e2e: {
    excludeSpecPattern: ["**/practice/**"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      const environment = config.env.environment || "production";
      const envConfig = environments[environment];

      if (!envConfig) {
        throw new Error(`Environment "${environment}" is not defined in cypress.config.js`);
      }

      config.baseUrl = envConfig.apiBaseUrl;
      config.env = { ...config.env,...envConfig}

      return config
    },
  },
});
