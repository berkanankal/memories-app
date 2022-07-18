import { useEffect } from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth";
import PostDetails from "./components/PostDetails";

import { getLoggedInUser } from "./redux/authSlice";
import { resetErrorMessage } from "./redux/postsSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { posts, error } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(getLoggedInUser());
      dispatch(resetErrorMessage());
    }
  }, [dispatch, posts, error]);

  return (
    <Container maxWidth="lg">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home />} />
          <Route
            path="/auth"
            element={user ? <Navigate to="/posts" /> : <Auth />}
          />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
