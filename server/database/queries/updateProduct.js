const pool = require('../config/connection');

const deleteProduct = (id, name, price, description, image, category) => pool.query({
  text: 'UPDATE products SET name = $2, price = $3, description = $4, image= $5, category=$6 WHERE id = $1;',
  values: [id, name, price, description, image, category],
});

module.exports = deleteProduct;
