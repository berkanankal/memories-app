import { useEffect } from "react";
import { Grid } from "@mui/material";
import Post from "./Post";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, setPage } from "../../redux/postsSlice";
import { useSearchParams } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();

  const { posts, totalPosts, numberOfPages, limit } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    const page = searchParams.get("page");
    const searchQuery = searchParams.get("search");
    dispatch(fetchPosts({ page: page, searchQuery: searchQuery }));
  }, [dispatch, searchParams]);

  // useEffect(() => {
  //   console.log(totalPosts);
  //   console.log((numberOfPages - 1) * limit);
  //   console.log(page);
  //   if (totalPosts === (numberOfPages - 1) * limit) {
  //     setSearchParams({ page: page - 1 });
  //   }
  // }, [numberOfPages, limit, page, totalPosts, setSearchParams]);

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={post._id}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
