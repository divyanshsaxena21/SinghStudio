const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

// Get all products for the marketplace
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// Place an order (users must be authenticated)
router.post('/orders', authMiddleware, async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    const user_uid = req.user.uid;

    const product = await Product.findById(product_id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    if (product.stock_quantity < quantity) {
      return res.status(400).json({ error: 'Not enough stock available' });
    }

    const total_price = product.price * quantity;

    const order = new Order({
      user_uid,
      product_id,
      quantity,
      total_price,
    });

    await order.save();

    // Update product stock
    product.stock_quantity -= quantity;
    await product.save();

    res.status(201).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ error: 'Failed to place order' });
  }
});

module.exports = router;
