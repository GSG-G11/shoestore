const { Pool } = require('pg');
require('env2')('config.env');

const {
  env: { NODE_ENV, DATABASE_URL, DB_URL_DEV },
} = process;
let connectionString = '';
let ssl = false;

if (NODE_ENV === 'production') {
  connectionString = DATABASE_URL;
} else {
  connectionString = DB_URL_DEV;
  ssl = { rejectUnauthorized: false };
}
if (!DATABASE_URL) {
  throw new Error('database not found');
}

module.exports = new Pool({
  connectionString,
  ssl,
});
