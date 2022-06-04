import { useEffect } from "react";
import { Grid } from "@mui/material";
import Post from "./Post";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
