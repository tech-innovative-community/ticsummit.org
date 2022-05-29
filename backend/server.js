require("dotenv").config({
  path: "./config/config.env",
});
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./config/db");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 5000;
connectDb();
app.use(
  cors({
    origin:
      "*",
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("the ticsummit backend and made with love by zenith noble");
});

app.use("/images/", express.static(path.join(__dirname, "public/images")));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

// dfknadnidadnidsn
