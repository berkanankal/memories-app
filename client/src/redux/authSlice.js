import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import decode from "jwt-decode";

export const register = createAsyncThunk(
  "auth/register",
  (formInformations, thunkAPI) => {
    return axios
      .post("http://localhost:5004/api/auth/register", formInformations)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (!err.response) {
          throw err;
        }

        return thunkAPI.rejectWithValue(err.response.data);
      });
  }
);

export const login = createAsyncThunk(
  "auth/login",
  (formInformations, thunkAPI) => {
    return axios
      .post("http://localhost:5004/api/auth/login", formInformations)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.token));
        const user = decode(res.data.token);
        return user;
      })
      .catch((err) => {
        if (!err.response) {
          throw err;
        }

        return thunkAPI.rejectWithValue(err.response.data);
      });
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
  localStorage.removeItem("user");
});

let user = null;
const token = localStorage.getItem("user");

if (token) {
  const decodedToken = decode(token);
  if (!(decodedToken.exp * 1000 < new Date().getTime())) {
    user = decodedToken;
  } else {
    localStorage.removeItem("user");
  }
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user,
    isSignup: false,
    isLoading: false,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    resetInitialState: (state) => {
      state.isSignup = false;
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
  extraReducers: {
    // LOGIN
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = null;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    // REGISTER
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSignup = true;
      state.error = null;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    // LOGOUT
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { resetInitialState } = authSlice.actions;

export default authSlice.reducer;
