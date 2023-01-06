const { Router } = require('express')
const router = Router()
const { productСategoriesController } = require('../controllers/productСategories.controller')

router.post('', productСategoriesController.addProductCategory)

module.exports = router
