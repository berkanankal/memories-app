const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
  likePost,
} = require("../controllers/posts");
const upload = require("../helpers/libraries/multer");
const {
  getAccessToRoute,
  getPostOwnerAccess,
} = require("../middlewares/authorization/auth");
const {
  checkPostExist,
} = require("../middlewares/database/databaseErrorHelpers");

router.get("/", getAllPosts);
router.post("/", [getAccessToRoute, upload.single("postImage")], createPost);
router.delete(
  "/:id",
  [getAccessToRoute, checkPostExist, getPostOwnerAccess],
  deletePost
);
router.put(
  "/:id",
  [
    getAccessToRoute,
    checkPostExist,
    getPostOwnerAccess,
    upload.single("postImage"),
  ],
  updatePost
);
router.put("/:id/like", [getAccessToRoute, checkPostExist], likePost);

module.exports = router;
