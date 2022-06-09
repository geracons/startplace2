const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const mainController = require("../controllers/main-controller");
const usersController = require("../controllers/usersControllers");

router.get("/", mainController.home);
router.get("/productdetail/:id", mainController.detalleTour);

router.get("/login", mainController.login);
router.get("/formulario", mainController.formulario);



module.exports = router;
