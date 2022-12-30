const { Router } = require('express')
const router = Router()
const { categoryController } = require('../controllers/category.controller')

router.post('', categoryController.addCategory)
router.get('/category', categoryController.getCategory)
router.get('/category/:id', categoryController.getCategory)

module.exports = router
