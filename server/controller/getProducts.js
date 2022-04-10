const { getProducts } = require('../database/queries');

const getProductsController = (req, res) => {
  getProducts()
    .then(({ rows }) => res.status(201).json(rows))
    .catch((err) => res.status(500).json({ status: 500, message: err }));
};

module.exports = getProductsController;
