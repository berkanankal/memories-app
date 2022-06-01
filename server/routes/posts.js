const express = require("express");
const router = express.Router();
const { getAllPosts } = require("../controllers/posts");

router.get("/", getAllPosts);

module.exports = router;
