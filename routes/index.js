const { Router } = require("express");
const router = Router();
router.use("/product", require("./product.route"));
router.use("/gender", require("./gender.route"));
router.use("/gender/commodity", require("./genderCommodity.route"));
router.use("/authorization", require("./users.route"));
router.use("/basket", require("./basket.route"));
router.use("/product/categories", require("./productTypeGender.route"));
router.use("/brands", require("./brand.route"));

module.exports = router;
