const pool = require('../config/connection');

const deleteProduct = (id) => pool.query({
  text: 'DELETE FROM products where id = $1',
  values: [id],
});

module.exports = deleteProduct;
