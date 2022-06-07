const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
  likePost,
} = require("../controllers/posts");

router.get("/", getAllPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
router.put("/:id/like", likePost);

module.exports = router;
