const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// Public Routes
router.post('/products', auth, createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);


// router.post('/products', auth, upload.single('image'), createProduct);
router.put('/products/:id', auth, updateProduct);
router.delete('/products/:id', auth, deleteProduct);

module.exports = router;
