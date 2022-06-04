import React from "react";
import { Grid } from "@mui/material";
import Post from "./Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();

  const { posts } = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={6} key={post._id}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
