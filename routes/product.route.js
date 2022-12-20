const { Router } = require('express')
const router = Router()
const { productController } = require('../controllers/product.controller')
router.post('/product', productController.addProduct)

module.exports = router