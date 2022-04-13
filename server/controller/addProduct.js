const { addProduct } = require('../database/queries');

const addProductController = (req, res) => {
  const { body } = req;
  addProduct(body)
    .then(({ rows }) => res.status(201).json({ status: 201, message: 'Product Added', product: rows[0] }))
    .catch((err) => res.status(500).json({ status: 500, message: err }));
};
module.exports = addProductController;
