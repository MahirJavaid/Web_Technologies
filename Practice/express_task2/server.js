const express = require("express");
const mongoose = require("mongoose");

const server = express();

server.get("/api/students", function(req, res) {
    let students = [
        {
            name: "Bilal",
            address: "Wahdat Road"
        },
        {
            name: "Aqib",
            address: "Izmir Town"
        },
    ]
    res.send(students);
});

mongoose.connect("mongodb://localhost:27017/studentDB").then(function() {
    console.log("Connected to DB");
}).catch(function (){
    console.log("Error connecting to database");
});

server.listen(4000, function () {
    console.log("Server started listening at port 4000");
});