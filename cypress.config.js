const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dkt64f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
