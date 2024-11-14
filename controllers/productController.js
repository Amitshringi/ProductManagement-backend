const Product=require('../models/product');

//create  Product function
exports.createProduct = async (req, res) => {
    try {
        const { name, price, category, inStock } = req.body;
        const image = req.file ? req.file.path : null;
        const product = new Product({ name, price, category, inStock, image });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: 'Error creating product' });
    }
};


//get all function
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

//get product by Id function
exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
};

//update product function
exports.updateProduct = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
};


//deleteProduct function
exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
};