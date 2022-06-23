const express = require("express");
const {
  register,
  login,
  logout,
  getLoggedInUser,
} = require("../controllers/auth");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", getAccessToRoute, logout);
router.get("/user", getAccessToRoute, getLoggedInUser);

module.exports = router;
