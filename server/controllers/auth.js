const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const bcryptjs = require("bcryptjs");

const register = asyncHandler(async (req, res, next) => {
  const { name, surname, email, password } = req.body;

  const isRegister = await User.findOne({ email });

  if (isRegister) {
    return next(new CustomError("Email already exists", 400));
  }

  const user = await User.create({
    name,
    surname,
    email,
    password,
  });

  return res.status(201).json({
    success: true,
    data: user,
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return next(new CustomError("Please enter an email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!(user && bcryptjs.compareSync(password, user.password))) {
    return next(new CustomError("Please check your credentials", 400));
  }

  const token = user.getUserTokenFromModel();

  return res.status(200).json({
    success: true,
    data: {
      name: user.name,
      surname: user.surname,
    },
    token,
  });
});

module.exports = { register, login };
