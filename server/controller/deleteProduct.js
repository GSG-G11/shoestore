const deleteProductDB = require('../database/queries/deleteProductDB');

const deleteProduct = (req, res) => {
  const postId = req.params.id;
  deleteProductDB(postId);
  res.redirect('back');
};

module.exports = deleteProduct;
