const Post = require("../../models/Post");
const asyncHandler = require("express-async-handler");
const CustomError = require("../../helpers/error/CustomError");

const checkPostExist = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new CustomError("Post not found", 404));
  }

  return next();
});

module.exports = { checkPostExist };
