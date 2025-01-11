// cypress.config.js
const { defineConfig } = require('cypress');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add the Cucumber preprocessor plugin
    
      return config;
    },
    specPattern: 'cypress/e2e/**/*.{js,ts,jsx,tsx,feature}',

    env: {
      url:"https://qa-practice.netlify.app/bugs-form"

    }

  },
});
