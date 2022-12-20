const { Router } = require('express')
const router = Router()
const { categoryController } = require('../controllers/category.controller')

router.post('', categoryController.addCategory)
router.get('/site/category', categoryController.getCategory)


module.exports = router
