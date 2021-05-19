const router = require('express').Router();
const productsController = require('../controllers/productsController');

// Product Details
router.get('/:id', productsController.getProductDetails);

module.exports = router;
