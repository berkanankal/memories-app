const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();

  return res.status(200).json({
    success: true,
    data: posts,
  });
});

const createPost = asyncHandler(async (req, res) => {
  const information = req.body;

  const post = await Post.create(information);

  return res.status(201).json({
    success: true,
    data: post,
  });
});

module.exports = { getAllPosts, createPost };
