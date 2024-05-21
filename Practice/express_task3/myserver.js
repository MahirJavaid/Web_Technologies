const express = require("express");
const mongoose = require("mongoose");
const server = express();
const ejsLayouts = require("express-ejs-layouts");
const router = require("./routes/api/students");

server.use(express.json());
server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(ejsLayouts);
server.use(router);

// const express = require("express");
// const mongoose = require("mongoose");
// let server = express();
// let Student = require("./models/Student");
// server.use(express.json());
// server.set("view engine", "ejs");
// server.use(express.static("public"));
// let ejsLayouts = require("express-ejs-layouts");
// server.use(ejsLayouts);

// let router = require("./routes/api/students");
// server.use = ("/api", router);

server.get("/", async (req, res) => {
    res.render("homepage");
})

server.get("/contact-us", async (req, res) => {
    res.render("contact-us");
})

server.post("/api/students", async function (req, res) {

})

server.listen(4000, function () {
    console.log("Server started listening at port 4000");
});

mongoose.connect("mongodb://localhost:27017/studentDB").then(function() {
    console.log("Connected to student DB");
}).catch(function (){
    console.log("Error connecting to database");
});