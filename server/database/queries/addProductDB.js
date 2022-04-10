const connection = require('../config/connection');

const addProductDB = (name, price, image) => connection.query({
  text: `INSERT INTO products (name, price, image) 
        VALUES ($1, $2, $3) returning *;`,
  values: [name, price, image],
});
module.exports = addProductDB;
