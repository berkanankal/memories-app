import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useStyles from "./styles";
import moment from "moment";
import { deletePost, likePost, setCurrentId } from "../../../redux/postsSlice";
import { useDispatch, useSelector } from "react-redux";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { user } = useSelector((state) => state.auth);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleLike = (id) => {
    dispatch(likePost(id));
  };

  const handleSetCurrentId = (id) => {
    dispatch(setCurrentId(id));
  };

  const Likes = () => {
    return post.likes.includes(user._id) ? (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;
        {post.likes.length > 2
          ? `You and ${post.likes.length - 1} others`
          : `${post.likes.length} ${
              post.likes.length === 1 ? "Like" : "Likes"
            }`}
      </>
    ) : (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;{post.likes.length > 0 && post.likes.length}{" "}
        {post.likes.length <= 1 ? "Like" : "Likes"}
      </>
    );
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia
        className={classes.media}
        image={`${process.env.REACT_APP_BASE_URL}/uploads/${post.postImage}`}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">
          {post.creator.name} {post.creator.surname}
        </Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {user && user._id === post.creator._id && (
        <div className={classes.overlay2} name="edit">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleSetCurrentId(post._id);
            }}
            style={{ color: "white" }}
          >
            <MoreHorizIcon />
          </Button>
        </div>
      )}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message.split(" ").splice(0, 20).join(" ")}...
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {user ? (
          <Button
            size="small"
            color="primary"
            onClick={() => handleLike(post._id)}
          >
            <Likes />
          </Button>
        ) : (
          <Button size="small" color="primary" disabled>
            <ThumbUpAltOutlined fontSize="small" />
            &nbsp;{post.likes.length > 0 && post.likes.length}{" "}
            {post.likes.length <= 1 ? "Like" : "Likes"}
          </Button>
        )}
        {user && user._id === post.creator._id && (
          <Button
            size="small"
            color="secondary"
            onClick={() => handleDelete(post._id)}
          >
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
