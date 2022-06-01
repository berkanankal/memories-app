const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/env/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT} | ${process.env.NODE_ENV}`)
    )
  )
  .catch((err) => console.error(err));
