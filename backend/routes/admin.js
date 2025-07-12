const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

// Admin route to create a product
router.post('/products', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }

    const { name, description, price, stock_quantity, image_url } = req.body;
    const product = new Product({ name, description, price, stock_quantity, image_url });
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Admin route to view all orders
router.get('/orders', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }

    const orders = await Order.find().populate('product_id');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve orders' });
  }
});

module.exports = router;
