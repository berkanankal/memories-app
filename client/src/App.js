import React from "react";
import { Container, Grow, Grid } from "@mui/material";

import Posts from "./components/Posts";
import Form from "./components/Form";

import useStyles from "./styles";

import Navbar from "./components/Navbar";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
