const {
  defineConfig
} = require('cypress');

module.exports = defineConfig({
  projectId: 'eu71sz',
  "chromeWebSecurity": false,
  "pageLoadTimeout": 30000,
  "defaultCommandTimeout": 30000,
  "db": {
      "user": "postgres",
      "password": "Ibs@oct2022",
      "host": "localhost",
      "database": "postgres",
      "port": "5433",
  },
  e2e: {
      // We've imported your old cypress plugins here.
      // You may want to clean this up later by importing these.
      setupNodeEvents(on, config) {
          return require('./cypress/plugins/index.js')(on, config);
          return require('@cypress/grep/src/plugin')(config);
      },
  env: {
        url: 'http://127.0.0.1:3000/signin',
        awsurl: 'http://k8s-betaapp-ingressm-29790a68fa-1285978643.ap-south-1.elb.amazonaws.com/'
      },
  "experimentalSessionAndOrigin": true,
  "specPattern": "cypress/e2e/**/happystays_signin.feature",
  // "baseUrl":"http://127.0.0.1:3000/signin" 
  }
});