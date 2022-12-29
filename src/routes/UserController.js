const User = require("../models/User");
const express = require("express");
const authHandler = require("../auth/AuthHandler");
// define middleware
const router = express.Router();

// All Users
router.get("/", authHandler, async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

// Specific Users
router.get("/:id", async (req, res) => {
  const user = await User.findById({ _id: req.params.id });
  res.status(200).send(user);
});

// Insert Users
router.post("/", async (req, res) => {
  const payload = req.body;
  //   console.log(payload);
  const users = new User(payload);
  const user = await users.save();
  console.log(user);
  res.status(200).send(user);
  //   res.status(200).send({ message: "Hello from Post endpoint" });
});

module.exports = router;
