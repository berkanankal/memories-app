import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const register = createAsyncThunk(
  "auth/register",
  ([formInformations, setIsSignup, clearForm], { rejectWithValue }) => {
    return axios
      .post("http://localhost:5004/api/auth/register", formInformations)
      .then((res) => {
        setIsSignup(false);
        clearForm();
        toast.success("Kayıt işlemi başarılı", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return res.data;
      })
      .catch((err) => {
        if (!err.response) {
          throw err;
        }
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return rejectWithValue(err.response.data);
      });
  }
);

export const login = createAsyncThunk(
  "auth/login",
  ([formInformations, navigate], { rejectWithValue }) => {
    return axios
      .post("http://localhost:5004/api/auth/login", formInformations)
      .then((res) => {
        navigate("/");
        toast.success(`Hoşgeldin ${res.data.data.name}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return res.data;
      })
      .catch((err) => {
        if (!err.response) {
          throw err;
        }
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

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
    [login.pending]: (state, action) => {
      console.log("pending");
    },
    [login.fulfilled]: (state, action) => {
      console.log("fulfilled");
    },
    [login.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

// export const { setCurrentId } = postsSlice.actions;

export default authSlice.reducer;
