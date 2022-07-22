const User = require("../models/User");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  return res.status(200).json({
    success: true,
    data: users,
  });
});

module.exports = { getAllUsers };
