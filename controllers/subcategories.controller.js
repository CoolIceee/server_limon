const Subcategories = require('../models/Subcategories.model')

module.exports.subcategoriesController = {
  addSubcategories: async (req, res) => {
    try {
      const { name, category, floorCategory } = req.body
      Subcategories.create({
        name,
        category,
        floorCategory,
      })
      res.json('Подкатегория добавлена')
    } catch {}
  },
  getCategory: async (req, res) => {
    try {
      const data = await Subcategories.find({
        category: req.params.category,
      })
      res.json(data)
    } catch (e) {
      res.json(e)
    }
  },
}
