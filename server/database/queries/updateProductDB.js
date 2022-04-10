/* eslint-disable quotes */
const connection = require('../config/connection');

const updateProductDB = (id) => {
  const sql = {
    text: `update products set name = 'Updated' where id= $1`,
    values: [id],
  };
  return connection.query(sql);
};

module.exports = updateProductDB;
