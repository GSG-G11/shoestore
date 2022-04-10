const getProductsDB = require('../database/queries/getProductsDB');

const getProducts = (req, res, next) => {
  getProductsDB()
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = getProducts;
