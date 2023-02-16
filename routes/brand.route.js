const { Router } = require("express");
const router = Router();
const { brandController } = require("../controllers/brand.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/add/brand", authMiddleware, brandController.addBrand);

module.exports = router;
