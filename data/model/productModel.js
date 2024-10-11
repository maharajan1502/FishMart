const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Boolean,
    required: true,
    default: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const ProductModel = mongoose.model('ProductModel', productSchema);

module.exports = ProductModel;
