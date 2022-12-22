const Product = require('../models/Product.model')
module.exports.productController = {
  addProduct: async (req, res) => {
    try {
      const {
        name,
        subcategories,
        typeProduct,
        brand,
        photo,
        dimensions,
        description,
        price,
        discountPrice,
        quantity,
      } = req.body
      await Product.create({
        name,
        subcategories,
        typeProduct,
        brand,
        photo,
        dimensions,
        description,
        price,
        discountPrice,
        quantity,
      })
      res.json('Продукт добавлен')
    } catch (error) {
      res.json(error)
    }
  },
  getProduct: async (_, res) => {
    try {
      const data = await Product.find()
      res.json(data)
    } catch (error) {
      res.json(error)
    }
  },
}
