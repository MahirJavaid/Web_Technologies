const express = require("express");
const mongoose = require("mongoose");
const server = express();
const ejsLayouts = require("express-ejs-layouts");
const expressSession = require("express-session");
const checkAuth = require("./middlewares/session-auth");
const mainSite = require("./middlewares/main-site");
const Product = require("./models/Product");
const User = require("./models/User");
const router = require("./routes/api/products");

server.use(express.json());
server.set("view engine", "ejs");
server.use(express.urlencoded({extended : true}));
server.use(express.static("public"));
server.use(ejsLayouts);
server.use(expressSession({ secret: "Key to my secret"}));
server.use(router);
server.use(mainSite);

server.get("/products", checkAuth, async (req, res) => {
    let products = await Product.find();
    res.render("products", {products});
});

server.get("/blog", checkAuth, async (req, res) => {
    res.render("blog");
});

server.get("/about-us", async (req, res) => {
    res.render("about-us");
});

server.get("/contact-us", checkAuth, async (req, res) => {
    res.render("contact-us");
});

server.get("/stories", checkAuth, async (req, res) => {
    res.render("stories");
});

server.get("/register", async (req, res) => {
    res.render("register");
});

server.post("/register", async (req, res) => {
    console.log("Registering user with data:", req.body);
    let user = new User(req.body);
    await user.save();
    res.redirect("login");
});

server.get("/login", (req, res) => {
    res.render("login");
});

server.post("/login", async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.redirect("register");
    if (user.password != req.body.password) return res.redirect("login");
    req.session.user = user;
    return res.redirect("/");
});

server.get("/logout", (req, res) => {
    req.session.user = null;
    res.redirect("login");
});

server.get("/admin", checkAuth, (req, res) => {
    res.render("admin-panel");
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

// mongoose.connect("mongodb://localhost:27017/productsDB").then(function () {
//     console.log("Connected to product DB");
// }).catch(function () {
//     console.log("Error connecting to database");
// });
