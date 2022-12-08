const Subcategories = require('../models/Subcategories.model')

module.exports.subcategoriesController = {
  addSubcategories: async (req, res) => {
    try {
      const { name, category } = req.body
      Subcategories.create({
        name,
        category,
      })
      res.json('Подкатегория добавлена')
    } catch {}
  },
}
