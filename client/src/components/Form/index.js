import { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { createPost } from "../../redux/postsSlice";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";

const Form = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { currentId } = useSelector((state) => state.posts);

  const [formInformations, setFormInformations] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [],
    postImage: "default.jpg",
  });

  const onInputChange = (e) => {
    if (e.target.name === "tags") {
      setFormInformations({
        ...formInformations,
        tags: e.target.value.trim().split(","),
      });
    } else {
      setFormInformations({
        ...formInformations,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handlePhoto = (e) => {
    setFormInformations({ ...formInformations, postImage: e.target.files[0] });
  };

  const clearInputs = () => {
    setFormInformations({
      creator: "",
      title: "",
      message: "",
      tags: [],
      postImage: "default.jpg",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("creator", formInformations.creator);
    formData.append("title", formInformations.title);
    formData.append("message", formInformations.message);
    var array = formInformations.tags;
    for (var i = 0; i < array.length; i++) {
      formData.append("tags[]", array[i]);
    }
    formData.append("postImage", formInformations.postImage);

    dispatch(createPost(formData));
    clearInputs();
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing memory` : "Creating a Memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          onChange={onInputChange}
          value={formInformations.creator}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          onChange={onInputChange}
          value={formInformations.title}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          onChange={onInputChange}
          value={formInformations.message}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          onChange={onInputChange}
          value={formInformations.tags}
        />
        <div className={classes.fileInput}>
          <input type="file" onChange={handlePhoto} />
        </div>
        <Button
          sx={{ marginBottom: 1 }}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => clearInputs()}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
