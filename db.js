const mongoose = require('mongoose'); 
require('dotenv').config();

module.exports = () =>
  new Promise(async (resolve, reject) => {
    try {
      // Connect to MongoDB
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
     console.log('MongoDB Connected!')
      resolve(true);
    } catch (error) {
      console.log('MongoDB Connection Error: ', error);
      reject(error);
    }
  });
