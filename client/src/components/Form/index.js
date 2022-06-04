import { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { createPost } from "../../redux/postsSlice";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

const Form = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [formInformations, setFormInformations] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [],
    postImage: "",
  });

  console.log(formInformations);

  const onInputChange = (e) => {
    setFormInformations({
      ...formInformations,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(formInformations));
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">deneme</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          onChange={onInputChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          onChange={onInputChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          onChange={onInputChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          onChange={onInputChange}
        />
        <div className={classes.fileInput}>resim</div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
