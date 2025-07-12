const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock_quantity: Number,
  image_url: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
