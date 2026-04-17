const express = require("express");
const cors = require("cors");
const e = require("./middlewares/error.middleware");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/experiences", require("./modules/experience/experience.routes"));
app.use("/api/skills", require("./modules/skill/skill.routes"));
app.use("/api/portfolio", require("./modules/portfolio/portfolio.routes"));
app.use("/api/services", require("./modules/service/service.routes"));
app.use(
  "/api/certifications",
  require("./modules/certification/certification.routes"),
);
app.use("/api/education", require("./modules/education/education.routes"));
app.use("/api/about", require("./modules/about/about.routes"));
app.use("/api/home", require("./modules/home/home.routes"));
app.use("/api/contact", require("./modules/contact/contact.routes"));
app.use("/api/email-services", require("./routes/email-routes"));
app.use(e);
module.exports = app;
