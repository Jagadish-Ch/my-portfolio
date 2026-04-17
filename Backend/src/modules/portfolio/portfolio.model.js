const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    projectSpan: "String",
    projectName: "String",
    desc: "String",
    projectSkills: "String",
    projectLiveURL: "String",
    gitHubRepo: "String",
    projectThumbNail: "String",
  },
  { timestamps: true },
);
module.exports = mongoose.model("portfolio", schema);
