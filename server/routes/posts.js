const express = require("express");
const router = express.Router();
const { getAllPosts, createPost, deletePost } = require("../controllers/posts");

router.get("/", getAllPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);

module.exports = router;
