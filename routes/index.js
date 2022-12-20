const { Router } = require('express')
const router = Router()
router.use('/product', require('./product.route'))
router.use('/category', require('./category.route'))
router.use('/subcategories', require('./subcategories.route'))
module.exports = router
