const {
  CustomReplyHTMLTemplate,
} = require("../../email-html-templates/CustomReplyTemplate");
const { QuickReplyHTMLTemplate } = require("../../email-html-templates/QuickReplyTemplate");

const CustomEmailReply = (req, res) => {
  const { fullName, emailId, mobileNum, emailSubject, emailMessage } = req.query;

  const htmlTemplate = CustomReplyHTMLTemplate.replaceAll("{{name}}", fullName)
    .replaceAll("{{email}}", emailId)
    .replaceAll("{{contact}}", mobileNum)
    .replaceAll("{{subject}}", emailSubject)
    .replaceAll("{{message}}", emailMessage);

  res.send(htmlTemplate);
};

const QuickEmailReply = (req, res) => {
  const { fullName, emailId, mobileNum, emailSubject, emailMessage } =
    req.query;
  
  const htmlTemplate = QuickReplyHTMLTemplate.replaceAll("{{name}}", fullName)
    .replaceAll("{{email}}", emailId)
    .replaceAll("{{contact}}", mobileNum)
    .replaceAll("{{subject}}", emailSubject)
    .replaceAll("{{message}}", emailMessage);

  res.send(htmlTemplate);
};

module.exports = {
  QuickEmailReply,
  CustomEmailReply,
};
