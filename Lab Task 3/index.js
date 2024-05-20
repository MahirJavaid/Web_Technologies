const express = require("express");
const mongoose = require("mongoose");
const server = express();
const ejsLayouts = require("express-ejs-layouts");
const router = require("./routes/api/products");

server.use(express.json());
server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(ejsLayouts);
server.use(router);

server.get("/", async (req, res) => {
    res.render("homepage.ejs");
});

server.get("/products", async (req, res) => {
    res.render("products");
});

server.get("/blog", async (req, res) => {
    res.render("blog");
});

server.get("/about-us", async (req, res) => {
    res.render("about-us");
});

server.get("/contact-us", async (req, res) => {
    res.render("contact-us");
});

server.get("/stories", async (req, res) => {
    res.render("stories");
});

server.listen(4000, function() {
    console.log("Server started listening at port 4000");
});

mongoose.connect("mongodb://localhost:27017/productsDB").then(function () {
    console.log("Connected to DB");
}).catch(function () {
    console.log("Error connecting to database");
});