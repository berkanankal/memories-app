import React from "react";
import { Paper, Typography, CircularProgress, Divider } from "@mui/material";
import moment from "moment";

import useStyles from "./styles";

const Post = () => {
  const classes = useStyles();

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            deneme
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            deneme
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            deneme
          </Typography>
          <Typography variant="h6">Created by: deneme</Typography>
          <Typography variant="body1">
            {/* {moment(post.createdAt).fromNow()} */}
            deneme
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Comments - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt="deneme"
          />
        </div>
      </div>
    </Paper>
  );
};

export default Post;
