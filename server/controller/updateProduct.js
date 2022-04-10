<<<<<<< HEAD
const { updateProduct } = require('../database/queries');

const updateProductController = (req, res) => {
  const { id } = req.params;

  updateProduct(id)
    .then(({ rows }) => res.status(200).json({ status: 200, message: 'Product Updated', product: rows[0] }))
    .catch((err) => res.status(500).json({ status: 500, message: err }));
};

module.exports = updateProductController;
=======
const updateProductDB = require('../database/queries');

const updateProduct = (req, res) => {
  const productId = req.params.id;

  updateProductDB(productId);
  res.redirect(req.get('referer'));
};

module.exports = updateProduct;
>>>>>>> main
