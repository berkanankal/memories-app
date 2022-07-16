import { useState } from "react";
import { AppBar, TextField, Button, Chip } from "@mui/material";
import useStyles from "./styles";
import { fetchPosts } from "../../redux/postsSlice";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchPost = () => {
    console.log(searchQuery);
    dispatch(fetchPosts({ page: 1, searchQuery }));
  };

  return (
    <AppBar className={classes.appBarSearch} position="static" color="inherit">
      <TextField
        name="search"
        variant="outlined"
        label="Search Memories"
        fullWidth
        onChange={handleChange}
      />
      <Chip
        style={{ margin: "10px 0" }}
        label="Search Tags"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={searchPost}>
        Search
      </Button>
    </AppBar>
  );
};

export default SearchForm;
