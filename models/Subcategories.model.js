const mongoose = require('mongoose')

const subcategoriesSchema = mongoose.Schema({
  name: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, required: true },
  floorCategory: { type: mongoose.Schema.Types.ObjectId, required: true }
})
const Subcategories = mongoose.model('Subcategories', subcategoriesSchema)
module.exports = Subcategories
