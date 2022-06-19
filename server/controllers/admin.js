const User = require("../models/User");
const asyncHandler = require("express-async-handler");

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  return res.status(200).json({
    success: true,
    data: users,
  });
});

const deleteAllUsers = asyncHandler(async (req, res) => {
  await User.deleteMany();

  return res.status(200).json({
    success: true,
    message: "All users deleted",
  });
});

module.exports = { getAllUsers, deleteAllUsers };
