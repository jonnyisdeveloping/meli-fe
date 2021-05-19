const router = require('express').Router();

router.use('/api/items', require('./search'));
router.use('/api/items', require('./productDetails'));

module.exports = router;
