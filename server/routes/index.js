const express = require("express");
const router = express.Router();
const posts = require("./posts");
const auth = require("./auth");
const admin = require("./admin");

router.use("/posts", posts);
router.use("/auth", auth);
router.use("/admin", admin);

module.exports = router;
