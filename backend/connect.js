const mongoose = require("mongoose");

const connectDB = (url) => {
  //returns a promise
  return mongoose.connect(url);
};

module.exports = connectDB;
