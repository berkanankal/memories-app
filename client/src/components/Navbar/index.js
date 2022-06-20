import React from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

import memories from "../../images/memories.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const { user } = useSelector((state) => state.auth);

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
          {user && (
            <>
              <Avatar className={classes.purple} alt="deneme">
                {user.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </div>

        {!user && (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
