const User = require("../models/User");
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
  const { name, surname, email, password } = req.body;

  const user = await User.create({
    name,
    surname,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    data: user,
  });
});

module.exports = { register };
