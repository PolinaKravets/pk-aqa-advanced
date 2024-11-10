const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: { runMode: 2, openMode: 2 },
  video: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
