const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  prices: {
    small: { type: Number },
    medium: { type: Number },
    large: { type: Number }
  },
  stockQuantity: { type: Number, required: true },
  category: { type: String, required: true },
  description: String,
  isCustomizable: Boolean,
  CustomizationDescription: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
