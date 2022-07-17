import { useState } from "react";
import { AppBar, TextField, Button, Chip } from "@mui/material";
import useStyles from "./styles";
import { fetchPosts, setSearchQuery } from "../../redux/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  const { searchQuery } = useSelector((state) => state.posts);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClickButton = (e) => {
    if (!search) return;
    setSearchParams({ search: search, page: 1 });
    setSearch("");
  };

  return (
    <AppBar className={classes.appBarSearch} position="static" color="inherit">
      <TextField
        value={search}
        name="search"
        variant="outlined"
        label="Search Memories"
        fullWidth
        onChange={handleChange}
      />
      <Button
        style={{ margin: "10px 0" }}
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleClickButton}
      >
        Search
      </Button>
    </AppBar>
  );
};

export default SearchForm;
