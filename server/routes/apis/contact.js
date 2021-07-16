const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

// send email from contact form to my email address
router.post("/", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const from = req.body.fromEmail;
  const name = req.body.fromName;
  const subject = req.body.subject;
  const message = req.body.message;
  var mailOptions = {
    from: from,
    to: "nate.baker@mibase.net",
    subject: subject,
    text: `
      Yooo, Nate! ${name} sent you the below message:
    
        ${message}
        
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      return res.status(500).json({ msg: "Couldn't send email" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({
        msg: "Email sent: " + info.response,
      });
    }
  });
});

module.exports = router;
