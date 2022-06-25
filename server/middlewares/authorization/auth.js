const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const Post = require("../../models/Post");

const getAccessToRoute = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!(authorization && authorization.startsWith("Bearer: "))) {
    return next(
      new CustomError("You are not authorized to access this page", 401)
    );
  }

  const token = authorization.split(" ")[1];

  const { JWT_SECRET_KEY } = process.env;

  jwt.verify(token, JWT_SECRET_KEY, function (err, decoded) {
    if (err) {
      return next(
        new CustomError(
          "Your authorization has expired, you need to login again",
          401
        )
      );
    }

    req.user = decoded;

    return next();
  });
};

const getPostOwnerAccess = async (req, res, next) => {
  const userId = req.user._id;
  const postId = req.params.id;

  const post = await Post.findById(postId);

  if (post.creator != userId) {
    return next(new CustomError("Only post owner can access this page", 403));
  }

  return next();
};

module.exports = { getAccessToRoute, getPostOwnerAccess };
