const pool = require('../config/connection');

const getProductID = (id) => pool.query({
  text: 'SELECT * from products where id =$1;',
  values: [id],
});

module.exports = getProductID;
