const { Router } = require('express')
const router = Router()
const {
  subcategoriesController,
} = require('../controllers/subcategories.controller')

router.post('', subcategoriesController.addSubcategories)

module.exports = router
