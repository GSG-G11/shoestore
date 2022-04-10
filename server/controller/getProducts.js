<<<<<<< HEAD
const { getProducts } = require('../database/queries');

const getProductsController = (req, res) => {
  getProducts()
    .then(({ rows }) => res.status(201).json(rows))
    .catch((err) => res.status(500).json({ status: 500, message: err }));
};

module.exports = getProductsController;
=======
const getProductsDB = require('../database/queries/getProductsDB');

const getProducts = (req, res, next) => {
  getProductsDB()
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = getProducts;
>>>>>>> main
