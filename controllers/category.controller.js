const Category = require('../models/Category.model')
module.exports.categoryController = {
  addCategory: async (req, res) => {
    try {
      const { name } = req.body
      await Category.create({
        name,
      })
      res.json('Категория добвалена')
    } catch (e) {
      res.json(e, 'd')
    }
  },
}
