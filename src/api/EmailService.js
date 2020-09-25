const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
     const message = {
          from: `Test mail <${process.env.MAIL_LOGIN}>`,
          to: "",
          subject: "",
          text: "Test message",
          html: "<p>Test message</p>",
     };

     const transporter = nodemailer.createTransport({
          host: "SMTP.office365.com",
          port: 587,
          tls: {
               // ciphers:'SSLv3'
               rejectUnauthorized: false,
          },
          secure: false,
          auth: {
               user: process.env.MAIL_LOGIN,
               pass: process.env.MAIL_PASSWORD,
          },
     });

     transporter.sendMail(message, (error, info) => {
          if (error) {
               return console.log(error);
          }

          return console.log("poszło");
     });

     res.send({ ala: "test" });
});

module.exports = router;
