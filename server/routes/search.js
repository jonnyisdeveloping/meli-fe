const router = require('express').Router();
const productsController = require('../controllers/productsController');

// Product search
router.get('/', productsController.getProductsOnSearch);

module.exports = router;
