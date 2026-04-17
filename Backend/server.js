require("dotenv").config();
const app = require("./src/app");
const db = require("./src/config/db");
db();

app.get("/api", (req, res) => {
  res.send("Welcome to my portfolio backend API server!");
});

app.listen(process.env.PORT || 5000);
