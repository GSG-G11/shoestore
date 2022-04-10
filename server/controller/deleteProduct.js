<<<<<<< HEAD
const { deleteProduct } = require('../database/queries');

const deleteProductController = (req, res) => {
  const { id } = req.params;
  deleteProduct(id)
    .then(() => res.status(200).json({ status: 200, message: 'Product Deleted' }))
    .catch((err) => res.status(500).json({ status: 500, message: err }));
};

module.exports = deleteProductController;
=======
const deleteProductDB = require('../database/queries/deleteProductDB');

const deleteProduct = (req, res) => {
  const postId = req.params.id;
  deleteProductDB(postId);
  res.redirect('back');
};

module.exports = deleteProduct;
>>>>>>> main
