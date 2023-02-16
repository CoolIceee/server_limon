const { Router } = require("express");
const router = Router();
const { genderController } = require("../controllers/gender.controller");

router.post("", genderController.addCategory);
router.get("", genderController.getCategory);
router.get("/:id", genderController.getCategory);

module.exports = router;
