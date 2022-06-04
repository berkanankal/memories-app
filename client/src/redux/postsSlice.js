import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (formInformations) => {
    return await axios.post(
      "http://localhost:5004/api/posts",
      formInformations
    );
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [createPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload.data);
    },
  },
});

export default postsSlice.reducer;
