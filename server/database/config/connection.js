require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV,
  DATABASE_URL,
  DB_URL_DEV,
} = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'production':
    connectionString = DATABASE_URL;
    ssl = { rejectUnauthorized: false };
    break;
  default:
    connectionString = DB_URL_DEV;
    break;
}

if (!connectionString) {
  throw new Error('NO DATABASE URL');
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
