const addProductDB = require('../database/queries/addProductDB');

const addProduct = (req, res) => {
  const {
    name, price, image,
  } = req.body;
  addProductDB(name, price, image)
    .then(() => {
      res.redirect('/home');
    });
};
module.exports = addProduct;
