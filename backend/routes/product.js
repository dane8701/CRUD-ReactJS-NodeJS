const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productCtrl = require('../controllers/product');

router.post('/', auth, productCtrl.createProduct);

router.put('/:id', auth, productCtrl.modifyProduct);

router.delete('/:id', auth, productCtrl.deleteProduct);

router.get('/:id', productCtrl.getOneProduct);

router.get('/', productCtrl.getAllProducts);

module.exports = router;