const router = require("express").Router();
const sendEmail = require("./apis/contact");

router.use("/api/v1/sendMail", sendEmail);

module.exports = router;
