const Subcategories = require("../models/GenderCommodity.model");
const Category = require("../models/Gender.model");
module.exports.genderCommodityController = {
  addSubcategories: async (req, res) => {
    try {
      const { name, genderСategories } = req.body;
      Subcategories.create({
        name,
        genderСategories,
        subcategoryProduct,
        // category,
        // floorCategory,
      });
      res.json("Подкатегория добавлена");
    } catch {
      res.json(e);
    }
  },
  getCategory: async (req, res) => {
    try {
      const data = await Subcategories.find({
        genderСategories: req.params.id,
      }).populate("subcategoryProduct");
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  getOneCategory: async (req, res) => {
    try {
      const data = await Subcategories.find({
        category: "63a03a91fbc1a5a06fc655d1",
      });
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
};
