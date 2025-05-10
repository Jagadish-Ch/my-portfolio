const {
  sendEmailHTMLTemplate,
} = require("../../email-html-templates/SendEmailTemplate");

const sendMailToOwner = (req, res) => {
  const { fullName, emailId, mobileNum, emailSubject, emailMessage } =
    req.query;

  const htmlTemplate = sendEmailHTMLTemplate
    .replaceAll("{{name}}", fullName)
    .replaceAll("{{email}}", emailId)
    .replaceAll("{{contact}}", mobileNum)
    .replaceAll("{{subject}}", emailSubject)
    .replaceAll("{{message}}", emailMessage);

  res.send(htmlTemplate);
};

module.exports = sendMailToOwner;
