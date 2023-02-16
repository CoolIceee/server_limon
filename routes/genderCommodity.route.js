const { Router } = require("express");
const router = Router();
const {
  genderCommodityController,
} = require("../controllers/genderCommodity.controller");

router.post("", genderCommodityController.addSubcategories);
router.get("/gc/:id", genderCommodityController.getCategory);
router.get("/gc", genderCommodityController.getOneCategory);

module.exports = router;
