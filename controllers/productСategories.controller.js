const ProductCategory = require("../models/ProductСategories.model");
const Subcategories = require("../models/Subcategories.model");

module.exports.productСategoriesController = {
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
  // getOneCategory: async (req, res) => {
  //   try {
  //     const data = await Subcategories.find({
  //       category: '63a03a91fbc1a5a06fc655d1',
  //     })
  //     res.json(data)
  //   } catch (e) {
  //     res.json(e)
  //   }
  // },
};
