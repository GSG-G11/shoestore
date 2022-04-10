const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('../config/connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, '..', 'build/build.sql')).toString();
  // eslint-disable-next-line no-console
  console.log('Tables created successfully');
  return connection.query(sql);
};

module.exports = dbBuild;
