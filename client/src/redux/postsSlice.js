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

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload.data);
    },
  },
});

export default postsSlice.reducer;
