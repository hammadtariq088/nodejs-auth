// creating server
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/UserController");
const app = express();
const port = 8080;

// define middleware
app.use(express.json());

// Mongoose connection

const mongoConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/goldsGym");
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Couldn't connected to MongoDB" + error);
  }
};

mongoConnection();

app.use("/users", router);

// sever listening
app.listen(port, () => {
  console.log(`the server is listening at ${port}`);
});
