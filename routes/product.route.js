const { Router } = require('express')
const router = Router()
const { productController } = require('../controllers/product.controller')

router.post('', productController.addProduct)
router.get('/get', productController.getProduct)



module.exports = router
