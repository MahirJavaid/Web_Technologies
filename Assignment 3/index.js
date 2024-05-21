const express = require("express");

let ejsLayouts = require("express-ejs-layouts");

let server = express();
server.use(express.json());
server.use(ejsLayouts);
server.use(express.static("public"));
server.set("view engine", "ejs");

server.get("/", async (req, res) => {
    res.render("homepage");
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