const { Pool } = require('pg');
require('env2')('config.env');

let DATABASE_URL = '';

if (process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.DB_URL_TEST;
} else if (process.env.NODE_ENV === 'production') {
  DATABASE_URL = process.env.DATABASE_URL;
} else {
  DATABASE_URL = process.env.DB_URL_DEV;
}

// if (!DATABASE_URL) {
//   throw new Error('database not found');
// }

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

module.exports = connection;
