const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/seminar", (req, res) => {
  res.render("seminar");
});
app.get("/seminar-details", (req, res) => {
  res.render("seminar-details");
});
app.get("/seminar-form", (req, res) => {
  res.render("seminar-form");
});
app.get("/shop", (req, res) => {
  res.render("shop");
});
app.get("/projects", (req, res) => {
  res.render("projects");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = app;
