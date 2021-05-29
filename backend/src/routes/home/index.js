"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");


router.get("/",ctrl.output.home);
router.get("/login",ctrl.output.login);
router.get("/register",ctrl.output.register);


router.get("/exercises/:date",ctrl.process.getExercise);

router.post("/login",ctrl.process.login);
router.post("/register",ctrl.process.register);

router.post("/exercises", ctrl.process.saveExercise);

module.exports = router;