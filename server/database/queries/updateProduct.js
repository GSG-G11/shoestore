const pool = require('../config/connection');

const deleteProduct = ({
  id, name, price, description, image,
}) => pool.query({
  text: 'UPDATE products SET name = $1, price = $2, description = $3, image= $4 WHERE id = $5;',
  values: [id, name, price, description, image],
});

module.exports = deleteProduct;
