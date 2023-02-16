const mongoose = require('mongoose')

const ProductTypeGenderSchema = mongoose.Schema({
  name: { type: String },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategories" },
});

const ProductTypeGender = mongoose.model(
  "ProductTypeGender",
  ProductTypeGenderSchema
);
module.exports = ProductTypeGender;
