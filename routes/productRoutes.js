const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

const productController = require("../controllers/productsControllers");

router.get("/productcart", productController.productCart);
router.get("/productdetail", productController.productDetail);




module.exports = router;