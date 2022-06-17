const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  deletePost,
  deleteAllPosts,
  updatePost,
  likePost,
} = require("../controllers/posts");
const upload = require("../helpers/libraries/multer");

router.get("/", getAllPosts);
router.post("/", upload.single("postImage"), createPost);
router.delete("/:id", deletePost);
router.delete("/", deleteAllPosts);
router.put("/:id", upload.single("postImage"), updatePost);
router.put("/:id/like", likePost);

module.exports = router;
