const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  photo: [{ type: String }],
  dimensions: [{ type: String }],
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  brand: { type: mongoose.Schema.Types.ObjectId, required: true },
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
