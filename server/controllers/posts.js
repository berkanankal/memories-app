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

  if (req.savedImage) {
    information.postImage = req.savedImage;
  }

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

const deleteAllPosts = asyncHandler(async (req, res) => {
  await Post.deleteMany();

  return res.status(200).json({
    success: true,
    message: "All posts deleted successfully",
  });
});

// EĞER İDYE AİT POST YOKSA KONTROL ET

const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const information = req.body;

  if (req.savedImage) {
    information.postImage = req.savedImage;
  }

  console.log(id);
  console.log(information);
  console.log(req.savedImage);

  const post = await Post.findByIdAndUpdate(id, information, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    success: true,
    data: post,
  });
});

const likePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  post.likes += 1;

  await post.save();

  return res.status(200).json({
    success: true,
    message: "Post liked successfully",
  });
});

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  deleteAllPosts,
  updatePost,
  likePost,
};
