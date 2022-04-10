const connection = require('../config/connection');

const getpostsDB = () => {
  const sql = {
    text: 'SELECT * from products ;',
    values: [],
  };

  return connection.query(sql);
};

module.exports = getpostsDB;
