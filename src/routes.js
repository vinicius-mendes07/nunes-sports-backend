const express = require('express');
const ProductController = require('./app/controllers/ProductController');

const router = express.Router();

router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.put('/products/:id', ProductController.update);
router.post('/products', ProductController.store);
router.delete('/products/:id', ProductController.delete);

module.exports = router;
