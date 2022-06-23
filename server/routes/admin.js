const express = require("express");
const {
  deleteAllUsers,
  deleteAllPosts,
  getAllUsers,
} = require("../controllers/admin");

const router = express.Router();

router.get("/users", getAllUsers);
router.delete("/deleteallusers", deleteAllUsers);
router.delete("/deleteallposts", deleteAllPosts);

module.exports = router;
