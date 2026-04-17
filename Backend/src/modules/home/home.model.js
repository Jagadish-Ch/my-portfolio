const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    introduction: "String",
    yourRoles: ["String"],
    desc: "String",
    resumeLink: "String",
    gitHubLink: "String",
    linkedLink: "String",
    profileImageAddress: "String",
  },
  { timestamps: true },
);
module.exports = mongoose.model("home", schema);
