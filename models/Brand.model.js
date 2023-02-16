const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  name: { type: String },
  photo: { type: String },
  description: { type: String },
});
const Brand = mongoose.model("Brands", brandSchema);
module.exports = Brand;
