const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  subcategories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  typeProduct: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Subcategories'
  },
  brand: { type: mongoose.Schema.Types.ObjectId, required: true },
  photo: [{ type: String }],
  dimensions: [{ type: String }],
  description: { type: String },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  quantity: { type: Number },
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
