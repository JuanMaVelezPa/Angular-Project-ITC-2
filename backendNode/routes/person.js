"use strict";

var express = require("express");
var PersonController = require("../controllers/person");
var router = express.Router();

router.get("/home", PersonController.home);
router.post("/test", PersonController.test);
router.post("/save", PersonController.savePerson);

module.exports = router;
