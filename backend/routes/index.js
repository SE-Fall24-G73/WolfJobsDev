const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

console.log("router loaded");

router.get("/", homeController.home);
router.use("/users", require("./users"));

router.use("/api", require("./api"));
router.use("/send", require("./send"));
router.use("/auth", require("./auth"));

module.exports = router;
