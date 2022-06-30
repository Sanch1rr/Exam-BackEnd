const mongoose = require("mongoose");
const express = require("express");
const app = express();

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    mongoose.connect(
      "mongodb+srv://admin:sanchir12345@cluster0.v1tocnc.mongodb.net/Todo?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
};
