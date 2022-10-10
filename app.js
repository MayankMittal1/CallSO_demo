require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors());
  // app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

if (process.env.MODULE == "api" || process.env.MODULE == "mono") {
  app.use(cors());
}
if (process.env.MODULE == "client" || process.env.MODULE == "mono") {
  app.get("*", (req, res, next) => {
    res.setHeader("Cache-Control", "public, max-age=500");
    next();
  });

  app.use(express.static(path.resolve(__dirname, "./client/build")));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });
}


// reloadFinalize();
module.exports = app;
