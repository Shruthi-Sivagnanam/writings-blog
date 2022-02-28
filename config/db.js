const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const db = () => {
  mongoose
    .connect(
      "mongodb+srv://Shruthi_11:shruthi2003@testing.rcoxf.mongodb.net/Writingsblog?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((result) => {
      console.log("Database connected");
      return true;
    })
    .catch((err) => {
      console.log("errror");
      return false;
    });
};
module.exports = db;
