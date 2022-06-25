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
        localStorage.setItem("token", JSON.stringify(res.data.data.token));
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

export const logout = createAsyncThunk("auth/logout", (arg, thunkAPI) => {
  return axios
    .get("http://localhost:5004/api/auth/logout", {
      headers: {
        Authorization: `Bearer: ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    .then((res) => {
      localStorage.removeItem("token");
      return res.data;
    })
    .catch((err) => {
      if (!err.response) {
        throw err;
      }

      return thunkAPI.rejectWithValue(err.response.data);
    });
});

export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  (arg, thunkAPI) => {
    return axios
      .get("http://localhost:5004/api/auth/user", {
        headers: {
          Authorization: `Bearer: ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (!err.response) {
          throw err;
        }
        localStorage.removeItem("token");

        return thunkAPI.rejectWithValue(err.response.data);
      });
  }
);

let user = null;
const token = localStorage.getItem("token");

if (token) {
  const decodedToken = decode(token);
  if (!(decodedToken.exp * 1000 < new Date().getTime())) {
    user = decodedToken;
  } else {
    localStorage.removeItem("token");
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
    logoutError: null,
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
      state.user = action.payload.data.user;
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
    [logout.pending]: (state) => {
      console.log("pending");
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.rejected]: (state, action) => {
      state.logoutError = action.payload.message;
    },
    // Get Logged In User
    [getLoggedInUser.pending]: (state) => {},
    [getLoggedInUser.fulfilled]: (state, action) => {},
    [getLoggedInUser.rejected]: (state, action) => {
      state.user = null;
    },
  },
});

export const { resetInitialState } = authSlice.actions;

export default authSlice.reducer;
