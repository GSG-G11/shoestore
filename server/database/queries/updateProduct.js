const pool = require('../config/connection');

const deleteProduct = (obj) => pool.query({
  text: 'UPDATE products SET name = $1, price = $2, image= $3 WHERE id = $4;',
  values: [obj.id, obj.name, obj.price, obj.image],
});

module.exports = deleteProduct;
