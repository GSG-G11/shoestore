<<<<<<< HEAD
const { addProduct } = require('../database/queries');

const addProductController = (req, res) => {
  const { body } = req;
  addProduct(body)
    .then(({ rows }) => res.status(201).json({ status: 201, message: 'Post Added', post: rows[0] }))
    .catch((err) => res.status(500).json({ status: 500, message: err }));
};
module.exports = addProductController;
=======
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
>>>>>>> main
