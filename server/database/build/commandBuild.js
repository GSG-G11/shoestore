/* eslint-disable no-console */
const fs = require('fs');
const connection = require('../config/connection');

const stream = fs.createReadStream('server/database/build/build.sql', 'utf8');

connection.on('error', (err) => {
  console.log('Error connecting to the database', err);
});

stream.on('data', (data) => {
  connection.query(data, (err) => {
    if (err) {
      console.log('Error running query', err);
    }
  });
});

stream.on('end', () => {
  console.log('Tables have been created sucessfully');
  connection.end();
});
