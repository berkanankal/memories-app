import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  return axios.get("http://localhost:5004/api/posts").then((res) => res.data);
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  (formInformations) => {
    return axios
      .post("http://localhost:5004/api/posts", formInformations)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", (id) => {
  return axios
    .delete(`http://localhost:5004/api/posts/${id}`)
    .then(() => id)
    .catch((err) => err.response.data);
});

export const likePost = createAsyncThunk("posts/likePost", (id) => {
  return axios
    .put(`http://localhost:5004/api/posts/${id}/like`)
    .then(() => id)
    .catch((err) => err.response.data);
});

export const updatePost = createAsyncThunk("posts/updatePost", (post) => {
  const id = post.get("_id");
  return axios
    .put(`http://localhost:5004/api/posts/${id}`, post)
    .then((res) => res.data)
    .catch((err) => err.response.data);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    currentId: null,
  },
  reducers: {
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload.data);
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    [likePost.fulfilled]: (state, action) => {
      const post = state.posts.find((post) => post._id === action.payload);
      post.likes++;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload.data._id ? action.payload.data : post
      );
    },
  },
});

export const { setCurrentId } = postsSlice.actions;

export default postsSlice.reducer;
