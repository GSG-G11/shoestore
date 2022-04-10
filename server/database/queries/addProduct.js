const pool = require('../config/connection');

const addProduct = ({
  name, price, description, image,
}) => pool.query({
  text: 'INSERT INTO products (name, price, description, image) VALUES ($1, $2, $3, $4) RETURNING * ;',
  values: [name, price, description, image],
});

module.exports = addProduct;
