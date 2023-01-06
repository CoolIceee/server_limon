const Subcategories = require('../models/Subcategories.model')
const Category = require('../models/Category.model')
module.exports.subcategoriesController = {
  addSubcategories: async (req, res) => {
    try {
      const { name, category, genderСategories, floorCategory } = req.body
      Subcategories.create({
        name,
        genderСategories,
        category,
        floorCategory,
      })
      res.json('Подкатегория добавлена')
    } catch {
      res.json(e)
    }
  },
  getCategory: async (req, res) => {
    try {
      const data = await Subcategories.find({
        category: req.params.id,
      }).populate('category')
      res.json(data)
    } catch (e) {
      res.json(e)
    }
  },
  getOneCategory: async (req, res) => {
    try {
      const data = await Subcategories.find({
        category: '63a03a91fbc1a5a06fc655d1',
      })
      res.json(data)
    } catch (e) {
      res.json(e)
    }
  },
}
