const express = require('express');
const { getAllProducts, getAllProductsTesting } = require('../Controllers/product_controllers');
const router = express.Router();

const {getAllProductss, getAllProductsTestingg} = require('../Controllers/product_controllers')

router.route('/').get(getAllProducts)
router.route('/testing').get(getAllProductsTesting)

module.exports = router;

