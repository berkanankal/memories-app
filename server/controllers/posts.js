const Post = require("../models/Post");

const getAllPosts = (req, res) => {
  res.send("Get All Posts");
};

module.exports = { getAllPosts };