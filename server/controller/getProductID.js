const { getProductID } = require('../database/queries');

const getProductsIDController = (req, res) => {
  getProductID(req.params.id)
    .then(({ rows }) => res.status(201).json(rows))
    .catch((err) => res.status(500).json({ status: 500, message: err }));
};

module.exports = getProductsIDController;
