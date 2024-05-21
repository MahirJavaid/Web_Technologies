const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "gdvfdyds4",
  api_key: "998753214376543",
  api_secret: "***************************"
});

module.exports = cloudinary;