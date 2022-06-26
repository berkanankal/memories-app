import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "./api/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  return API.fetchPosts().then((res) => res.data);
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  (formInformations, thunkAPI) => {
    return API.createPost(formInformations)
      .then((res) => res.data)
      .catch((err) => {
        if (!err.response) {
          throw err;
        }

        return thunkAPI.rejectWithValue(err.response.data);
      });
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  (id, thunkAPI) => {
    return API.deletePost(id)
      .then(() => id)
      .catch((err) => {
        if (!err.response) {
          throw err;
        }

        return thunkAPI.rejectWithValue(err.response.data);
      });
  }
);

export const likePost = createAsyncThunk("posts/likePost", (id, thunkAPI) => {
  return API.likePost(id)
    .then((res) => res.data)
    .catch((err) => {
      if (!err.response) {
        throw err;
      }

      return thunkAPI.rejectWithValue(err.response.data);
    });
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  (post, thunkAPI) => {
    const id = post.get("_id");
    return API.updatePost(id, post)
      .then((res) => res.data)
      .catch((err) => {
        if (!err.response) {
          throw err;
        }

        return thunkAPI.rejectWithValue(err.response.data);
      });
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    currentId: null,
    error: null,
  },
  reducers: {
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
    resetErrorMessage: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
    },
    [createPost.pending]: (state, action) => {
      console.log("pending");
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload.data);
    },
    [createPost.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    [deletePost.pending]: (state, action) => {
      console.log("pending");
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    [deletePost.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    [likePost.pending]: (state, action) => {
      console.log("pending");
    },
    [likePost.fulfilled]: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload.data._id ? action.payload.data : post
      );
    },
    [likePost.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    [updatePost.pending]: (state, action) => {
      console.log("pending");
    },
    [updatePost.fulfilled]: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload.data._id ? action.payload.data : post
      );
    },
    [updatePost.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
  },
});

export const { setCurrentId, resetErrorMessage } = postsSlice.actions;

export default postsSlice.reducer;
