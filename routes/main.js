const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

const mainController = require("../controllers/main-controller");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);
router.get("/formularioAdmin", mainController.formulario);



module.exports = router;
