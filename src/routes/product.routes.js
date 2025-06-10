const { Router } = require('express');
const controller = require('../controllers/product.controller');

const router = Router();

router.get('/products', controller.listProducts);

router.post('/products', controller.addProduct);

router.get('/products/:id', controller.getProductById);

module.exports = router;