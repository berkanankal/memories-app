// Tags inputunu chip inputa çevir

import { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { createPost, updatePost, setCurrentId } from "../../redux/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import useStyles from "./styles";

const Form = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { currentId, posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const [formInformations, setFormInformations] = useState({
    title: "",
    message: "",
    tags: [],
    postImage: "default.jpg",
  });

  const PostSchema = Yup.object().shape({
    title: Yup.string().required("Zorunlu alan"),
    message: Yup.string().required("Zorunlu alan"),
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    values,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: formInformations,
    enableReinitialize: true,
    validationSchema: PostSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("message", values.message);
      var array = values.tags;
      for (var i = 0; i < array.length; i++) {
        formData.append("tags[]", array[i]);
      }
      formData.append("postImage", values.postImage);

      if (currentId) {
        formData.append("_id", values._id);
        dispatch(updatePost(formData));
      } else {
        dispatch(createPost(formData));
      }

      clearInputs();
    },
  });

  useEffect(() => {
    if (currentId) {
      const post = posts.find((p) => p._id === currentId);
      setFormInformations(post);
    }
  }, [currentId, posts]);

  const handlePhoto = (e) => {
    setFieldValue("postImage", e.target.files[0]);
  };

  const handleTagsInput = (e) => {
    setFieldValue("tags", e.target.value.trim().split(","));
  };

  const clearInputs = () => {
    resetForm();
    dispatch(setCurrentId(null));
    setFormInformations({
      creator: "",
      title: "",
      message: "",
      tags: [],
      postImage: "default.jpg",
    });
  };

  if (!user) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper} elevation={6}>
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
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
          error={errors.title && touched.title ? true : false}
          helperText={errors.title && touched.title ? errors.title : null}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          error={errors.message && touched.message ? true : false}
          helperText={errors.message && touched.message ? errors.message : null}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          onChange={handleTagsInput}
          value={values.tags}
        />
        <div className={classes.fileInput}>
          <input type="file" onChange={handlePhoto} />
        </div>
        <Button
          className={classes.buttonSubmit}
          // sx={{ marginBottom: 1 }}
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
          onClick={clearInputs}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
