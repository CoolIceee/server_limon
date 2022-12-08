const { Router } = require('express')
const router = Router()
const { categoryController } = require('../controllers/category.controller')
router.post('', categoryController.addCategory)

module.exports = router
