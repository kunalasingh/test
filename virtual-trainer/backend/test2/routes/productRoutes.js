const express = require("express");
const {
  postProduct,
  getProducts,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").post(postProduct).get(getProducts);

module.exports = router;
