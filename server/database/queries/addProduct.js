const pool = require('../config/connection');

const addProduct = ({
  name, price, description, image, category,
}) => pool.query({
  text: 'INSERT INTO products (name, price, description, image,category) VALUES ($1, $2, $3, $4,$5) RETURNING * ;',
  values: [name, price, description, image, category],
});

module.exports = addProduct;
