import React from "react";
import { Container } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
