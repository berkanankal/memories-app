const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  creator: String,
  tags: [String],
  postImage: {
    type: String,
    default: "default.jpg",
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
