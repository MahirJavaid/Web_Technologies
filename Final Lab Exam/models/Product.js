const mongoose = require("mongoose");

const productsConnection = mongoose.createConnection("mongodb://localhost:27017/productsDB", { useNewUrlParser: true, useUnifiedTopology: true });

let productSchema = mongoose.Schema({
    name: String,
    price: String,
    image: String,
    category: String,
});

let Product = productsConnection.model("Product", productSchema);
module.exports = Product;
