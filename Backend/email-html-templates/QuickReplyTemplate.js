const QuickReplyHTMLTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
    }

    .email-container {
      max-width: 700px;
      margin: auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .header {
      background-color: #4a90e2;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 22px;
    }

    .content {
      padding: 25px;
    }

    .section-title {
      color: #333333;
      font-size: 18px;
      margin-top: 0;
    }

    .details-table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }

    .details-table td {
      padding: 12px 10px;
      border-bottom: 1px solid #eeeeee;
      vertical-align: top;
    }

    .details-table td:first-child {
      font-weight: bold;
      color: #555;
      width: 35%;
    }

    .message-box {
      background-color: #f9f9f9;
      border-left: 5px solid #ccc;
      padding: 20px;
      border-radius: 8px;
      margin-top: 10px;
      font-size: 15px;
      line-height: 1.7;
      color: #333;
      white-space: pre-wrap;
    }

    .reply-box {
      background-color: #f4f6f9;
      border-left: 5px solid #4a90e2;
      padding: 20px;
      margin: 30px 0;
      border-radius: 8px;
      font-size: 15px;
      line-height: 1.6;
      color: #333;
    }

    .buttons {
      text-align: center;
      margin-top: 30px;
    }

    .btn {
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 15px;
      margin: 10px;
      display: inline-block;
      transition: background-color 0.3s ease;
    }

    .btn-quick {
      background-color: #28a745;
      color: white;
    }

    .btn-quick:hover {
      background-color: #218838;
    }

    .btn-custom {
      background-color: #007bff;
      color: white;
    }

    .btn-custom:hover {
      background-color: #0056b3;
    }

    .footer {
      text-align: center;
      font-size: 12px;
      color: #888888;
      padding: 15px;
      background-color: #fafafa;
    }

    @media screen and (max-width: 600px) {
      .btn {
        display: block;
        width: 90%;
        margin: 10px auto;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>📬 Thank You for your Patience</h1>
    </div>
    <div class="content">

      <p class="section-title">Quick Reply - <strong>{{subject}}</strong></p>
      <div class="reply-box">
        Hello {{name}},<br><br>
        Thank you for reaching out via my portfolio website. I appreciate your message regarding "<strong>{{subject}}</strong>".<br><br>
        I’ll review your details and respond shortly. If you have anything more to add, feel free to reply to this email.<br><br>
        Warm regards,<br>
        <strong>[Your Full Name]</strong><br>
        [Your Role, e.g., MERN Stack Developer]<br>
        [Website | LinkedIn | Contact Info]
      </div>
    </div>

    <div class="footer">
        You received this message via the contact in portfolio website.
        <a href="/">Portfoli Link</a>
    </div>
  </div>
</body>
</html>
`

module.exports = {QuickReplyHTMLTemplate};