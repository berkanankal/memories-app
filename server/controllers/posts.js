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

// EĞER İDYE AİT POST YOKSA KONTROL ET

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await Post.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "Post deleted successfully",
  });
});

module.exports = { getAllPosts, createPost, deletePost };
