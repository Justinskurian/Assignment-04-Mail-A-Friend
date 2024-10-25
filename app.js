const nodemailer = require("nodemailer");
require("dotenv").config();

const mailId = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const options = {
  from: process.env.username,
  to: "justinskurian@gmail.com", //Replace with your Email ID
  subject: "Testing Nodemailer",
  text: "This is a test mail using nodemailer",
};

mailId.sendMail(options, (error) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("Mail Sent");
  }
});
