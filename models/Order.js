const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Product ID is required'],
      },
      quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Quantity must be at least 1'],
      },
      price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a non-negative number'],
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required'],
    min: [0, 'Total amount must be a non-negative number'],
  },
  shippingAddress: {
    type: String,
    required: [true, 'Shipping address is required'],
    trim: true,
  },
 status: {
  type: String,
  enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
  default: 'Pending',
},
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('Order', orderSchema);
