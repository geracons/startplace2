const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

const mainController = require("../controllers/main-controller");

router.get("/", mainController.home);



module.exports = router;
