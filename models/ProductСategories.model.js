const mongoose = require('mongoose')

const productСategorySchema = mongoose.Schema({
   name: {type: String},
   productCategory: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategories" }
})

const ProductCategory = mongoose.model('ProductCategory', productСategorySchema)
module.exports = ProductCategory
