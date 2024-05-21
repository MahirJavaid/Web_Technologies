const express = require("express");
const mongoose = require("mongoose");
const server = express();
const ejsLayouts = require("express-ejs-layouts");
const Product = require("./models/Product");
const router = require("./routes/api/products");

server.use(express.json());
server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(ejsLayouts);
server.use(router);

server.get("/products", async (req, res) => {
    let products = await Product.find();
    res.render("products", {products});
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

server.get("/:page?", async (req, res) => {
    let page = req.params.page ? req.params.page : 1;
    let pageSize = 3;
    let skip = (page - 1) * pageSize;
    let totalProducts = await Product.countDocuments();
    let totalPages = Math.ceil(totalProducts / pageSize);
    let products = await Product.find().limit(pageSize).skip(skip);
    res.render("homepage", {products, page, pageSize, totalProducts, totalPages});
});

server.listen(4000, function() {
    console.log("Server started listening at port 4000");
});

mongoose.connect("mongodb://localhost:27017/productsDB").then(function () {
    console.log("Connected to product DB");
}).catch(function () {
    console.log("Error connecting to database");
});