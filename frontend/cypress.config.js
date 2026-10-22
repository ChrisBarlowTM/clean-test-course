const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '51o6se',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
