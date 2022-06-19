import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "auth/register",
  ([formInformations, navigate], { rejectWithValue }) => {
    return axios
      .post("http://localhost:5004/api/auth/register", formInformations)
      .then((res) => {
        navigate("/");
        return res.data;
      })
      .catch((err) => {
        if (!err.response) {
          throw err;
        }

        return rejectWithValue(err.response.data);
      });
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
  extraReducers: {
    [register.pending]: (state, action) => {
      console.log("pending");
    },
    [register.fulfilled]: (state, action) => {
      console.log("fulfilled");
    },
    [register.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

// export const { setCurrentId } = postsSlice.actions;

export default authSlice.reducer;
