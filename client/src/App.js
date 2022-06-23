import React from "react";
import { Container } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth";
import PostDetails from "./components/PostDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Container maxWidth="lg">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
