import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:' + (process.env.PORT || 3001),
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require('@cypress/code-coverage/task')(on, config);
      // return config;
    },
    env: {
      auth0_username: process.env.CYPRESS_AUTH0_USERNAME,
      auth0_password: process.env.CYPRESS_AUTH0_PASSWORD,
      auth0_domain: process.env.CYPRESS_REACT_APP_AUTH0_DOMAIN,
      auth0_audience: process.env.CYPRESS_REACT_APP_AUTH0_AUDIENCE,
      auth0_scope: process.env.CYPRESS_REACT_APP_AUTH0_SCOPE,
      auth0_client_id: process.env.AUTH0_CLIENT_ID,
      auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
    },
  },
});
