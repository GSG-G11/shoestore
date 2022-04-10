const connection = require('../config/connection');

const deleteProductDB = (id) => {
  const sql = {
    text: 'delete from products where id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteProductDB;
