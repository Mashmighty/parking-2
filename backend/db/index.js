const { Pool } = require('pg');
require('dotenv').config();
import {sdk} from '@embrace-io/web-sdk';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // needed for Railway
  },
});

module.exports = pool;

sdk.initSDK({
  appID: 'parzr',
});

const App = () => {
  // rest of App...
};