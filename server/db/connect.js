const mongoose = require("mongoose");
const { find } = require("../model/task");

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

