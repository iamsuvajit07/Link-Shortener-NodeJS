const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://127.0.0.1:27017/urlshortener");

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error");
});
db.once("open", () => {
  console.log("Database Is Connected Successfully");
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// link router
const urlRouter = require("./routes/urlRoute");
app.use("/", urlRouter);

app.listen(PORT, () => {
  console.log("Server Is Running Successfully");
});
