import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://intern-x-marketplace.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
