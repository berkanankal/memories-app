import React from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";

import memories from "../../images/memories.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h2"
            align="center"
          >
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="icon"
            height="60"
          />
        </div>

        <div className={classes.profile}>
          <Avatar className={classes.purple} alt="deneme">
            d
          </Avatar>
          <Typography className={classes.userName} variant="h6">
            denemew
          </Typography>
          <Button
            variant="contained"
            className={classes.logout}
            color="secondary"
          >
            Logout
          </Button>
        </div>

        <Button component={Link} to="/auth" variant="contained" color="primary">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
