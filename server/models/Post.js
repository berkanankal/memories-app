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
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Creator is required"],
  },
  tags: [String],
  postImage: {
    type: String,
    default: "default.jpg",
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
