const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "dgciubbg4",
  api_key: "325387753962475",
  api_secret: "2QVGkKjwqo_vkn_a9S4S8yXGsE0"
});

module.exports = cloudinary;