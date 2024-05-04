const category = require("./category/category.controller");
const product = require("./product/product.controller");
const user = require("./user/user.controller");
const express = require("express");
const router = express.Router();

router.post("/category", category.create);
router.get("/category", category.findAll);

router.post("/product", product.create);
router.get("/product", product.findAll);

router.post("/user", user.create);
router.get("/user", user.findAll);

module.exports = router;
