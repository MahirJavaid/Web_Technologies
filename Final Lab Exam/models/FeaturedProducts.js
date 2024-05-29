const mongoose = require('mongoose');

const featuredConnection = mongoose.createConnection("mongodb://localhost:27017/featuredproductsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const featuredSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
});

featuredConnection.on('connected', () => {
    console.log('Connected to featuredProductsDB');
});

const FeaturedProduct = featuredConnection.model("FeaturedProducts", featuredSchema);
module.exports = FeaturedProduct;
