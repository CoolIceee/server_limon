const { Router } = require('express')
const router = Router()
const { productController } = require('../controllers/product.controller')

router.post('', productController.addProduct)
router.get('/get', productController.getProduct)
router.get('/get/:id', productController.getOneCategoryProduct)
router.get('/get/subcategory/product/:id', productController.getOneSubcategoryProduct)





module.exports = router
