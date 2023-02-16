const { Router } = require("express");
const router = Router();
const {
  productTypeGenderController,
} = require("../controllers/productTypeGender.controller");

router.post("", productTypeGenderController.addProductCategory);
router.get("/cat/:id", productTypeGenderController.getProductCategory);

module.exports = router;
