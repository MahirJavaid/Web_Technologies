const mongoose = require("mongoose");

let productSchema = mongoose.Schema({
    name: String,
    price: String,
    image: String,
    category: String,
});

let Product = mongoose.model("Product", productSchema);
module.exports = Product;