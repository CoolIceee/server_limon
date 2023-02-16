const mongoose = require("mongoose");

const GenderCommoditySchema = mongoose.Schema({
  name: { type: String },
  genderСategories: { type: mongoose.Schema.Types.ObjectId, required: true },
  subcategoryProduct: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategories",
    },
  ],
 
});
const GenderCommodity = mongoose.model(
  "GenderCommodity",
  GenderCommoditySchema
);
module.exports = GenderCommodity;
