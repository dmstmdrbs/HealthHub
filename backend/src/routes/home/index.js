"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.get("/exercises/:date", ctrl.process.getExercise);
router.get("/userInfo/:uName", ctrl.process.getUserInfo);
router.get("/register/userInfo/getUID/:id", ctrl.process.getUserUID);


router.post("/login", ctrl.process.login);
router.post("/checkID", ctrl.process.checkID);
router.post("/register", ctrl.process.register);

router.post("/exercises", ctrl.process.saveExercise);
router.post("/register/userInfo", ctrl.process.addUserInfo);

router.put("/userInfo", ctrl.process.saveUserInfo);

module.exports = router;