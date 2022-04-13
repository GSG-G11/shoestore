const { updateProduct } = require('../database/queries');

const updateProductController = (req, res) => {
  const { id } = req.params;
  const {
    name, price, description, image,
  } = req.body;

  updateProduct(id, name, price, description, image)
    .then(({ rows }) => res.status(200).json({ status: 200, message: 'Product Updated', product: rows[0] }))
    .catch((err) => res.status(500).json({ status: 500, message: err }));
};

module.exports = updateProductController;
