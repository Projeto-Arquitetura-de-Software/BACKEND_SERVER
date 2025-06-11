const { Router } = require('express');
const controller = require('../controllers/product.controller');

const router = Router();

router.get('/products', controller.listProducts);

router.post('/products', controller.addProduct);

router.get('/products/:id', controller.getProductById);

router.put('/products/:id', controller.updateProduct);

router.patch('/products/:id', controller.partiallyUpdateProduct);

router.delete('/products/:id', controller.deleteProduct);

module.exports = router;