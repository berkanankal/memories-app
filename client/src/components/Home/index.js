import React from "react";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import Posts from "../Posts";
import Form from "../Form";
import useStyles from "./styles";
import Chip from "@mui/material/Chip";
import Pagination from "../Pagination";

const Home = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                fullWidth
              />
              <Chip
                style={{ margin: "10px 0" }}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                className={classes.searchButton}
                variant="contained"
                color="primary"
              >
                Search
              </Button>
            </AppBar>
            <Form />

            <Paper className={classes.pagination} elevation={6}>
              <Pagination page={1} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
