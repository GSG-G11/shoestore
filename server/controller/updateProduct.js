const updateProductDB = require('../database/queries');

const updateProduct = (req, res) => {
  const productId = req.params.id;

  updateProductDB(productId);
  res.redirect(req.get('referer'));
};

module.exports = updateProduct;
