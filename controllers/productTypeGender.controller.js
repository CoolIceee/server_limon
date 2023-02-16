const ProductCategory = require("../models/ProductTypeGender.model");
const Subcategories = require("../models/GenderCommodity.model");

module.exports.productTypeGenderController = {
  addProductCategory: async (req, res) => {
    try {
      const { name, subcategory } = req.body;
      const data = await ProductCategory.create({
        name,
        subcategory,
      });
      await Subcategories.findByIdAndUpdate(data.subcategory, {
        $push: { subcategoryProduct: data._id },
      });
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  getProductCategory: async (req, res) => {
    try {
      const data = await ProductCategory.find({
        subcategory: req.params.id,
      });
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
};
