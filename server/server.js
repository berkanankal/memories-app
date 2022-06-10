const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/env/config.env" });
const routes = require("./routes");
const customErrorHandler = require("./middlewares/error/customErrorHandler");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.use(customErrorHandler);
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT} | ${process.env.NODE_ENV}`)
    )
  )
  .catch((err) => console.error(err));
