const mongoose = require("mongoose");

const usersConnection = mongoose.createConnection("mongodb://localhost:27017/usersDB", { useNewUrlParser: true, useUnifiedTopology: true });

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
});

let User = usersConnection.model("User", userSchema);
module.exports = User;
