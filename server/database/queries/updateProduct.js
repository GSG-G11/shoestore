const pool = require('../config/connection');

const deleteProduct = (id, name, price, description, image) => pool.query({
  text: 'UPDATE products SET name = $2, price = $3, description = $4, image= $5 WHERE id = $1;',
  values: [id, name, price, description, image],
});

module.exports = deleteProduct;
