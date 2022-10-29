const mongoose = require('mongoose');

// Create Image Schema
const imageSchema = new mongoose.Schema(
  {
    name: String,
    url:String
    },
  
  { timestamps: true }
);

module.exports = mongoose.model('image', imageSchema);