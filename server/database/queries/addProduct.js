const pool = require('../config/connection');

const addProduct = (obj) => pool.query({
  text: 'INSERT INTO products (name, price, image) VALUES ($1, $2, $3) RETURNING * ;',
  values: [obj.name, obj.price, obj.image],
});

module.exports = addProduct;
