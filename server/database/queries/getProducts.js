const pool = require('../config/connection');

const getposts = () => pool.query({
  text: 'SELECT * from products ;',
  values: [],
});

module.exports = getposts;
