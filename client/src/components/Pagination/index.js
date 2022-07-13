import { useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/postsSlice";
import { useSearchParams } from "react-router-dom";

import useStyles from "./styles";

const Paginate = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const { numberOfPages, page } = useSelector((state) => state.posts);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={page}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
