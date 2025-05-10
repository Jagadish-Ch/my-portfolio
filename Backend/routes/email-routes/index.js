const express = require("express");
const {
  QuickEmailReply,
  CustomEmailReply,
} = require("../../email-service/reply-email-service/index");
const sendMailToOwner = require("../../email-service/send-email-service");

const router = express.Router();

router.post("/send-email-to-owner", sendMailToOwner);
router.get("/quick-reply", QuickEmailReply);
router.get("/custom-reply", CustomEmailReply);

module.exports = router;
