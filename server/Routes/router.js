const express = require("express");
const router = new express.Router();

const users = require("../models/userSchema");
const nodemailer = require("nodemailer");

//email config

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

//register user details
router.post("/register", async (req, res) => {
  const { email, first_name, last_name, mobile, message } = req.body;

  if (!email || !first_name || !last_name || !mobile) {
    res.status(401).json({
      status: 401,
      error: "Please fill all fields",
    });
  }
  try {
    const userExist = await users.findOne({ email: email });

    if (userExist) {
      const userMessage = await preuser.Messagesave(message);
      console.log(userMessage)
    }

    const newUser = new users({
      email,
      first_name,
      last_name,
      mobile,
      messages: [],
    });

    await newUser.save();
  } catch (error) {
    res.status(401).json({
      status: 401,
      error: "Please fill all fields",
    });
    console.log("catch error");
  }
});

module.exports = router;
