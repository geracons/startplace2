const express = require("express");
const router = express.Router();
const { append } = require("express/lib/response");


const usersController = require("../controllers/usersControllers");


router.get("/login", usersController.login);
router.get("/formulario", usersController.formulario);



module.exports = router;
