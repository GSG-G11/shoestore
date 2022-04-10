const router = require('express').Router();
const path = require('path');
const {
  addProduct, getProducts, updateProduct, deleteProduct,
} = require('../controller');

router.get('/home', (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'public', 'index.html'),
  );
});

router.get('/getProducts', getProducts);

router.post('/addProduct', addProduct);
router.delete('/deleteProduct/:id', deleteProduct);

router.post('/updateProduct/:id', updateProduct);

module.exports = router;
