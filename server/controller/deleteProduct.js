const { deleteProduct } = require('../database/queries');

const deleteProductController = (req, res) => {
  const { id } = req.params;
  deleteProduct(id)
    .then(() => res.status(200).json({ status: 200, message: 'Product Deleted' }))
    .catch((err) => res.status(500).json({ status: 500, message: err }));
};

module.exports = deleteProductController;
