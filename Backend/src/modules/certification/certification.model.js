const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    certType: "String",
    roleName: "String",
    company: "String",
    description: "String",
    certificateLink: "String",
  },
  { timestamps: true },
);
module.exports = mongoose.model("certification", schema);
