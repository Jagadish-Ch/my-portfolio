const express = require("express");
const EmailRoutes = require("./routes/email-routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to Backend API of Portfolio"))
app.use("/email", EmailRoutes);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

app.listen(PORT, () => console.log(`Server is Running on ${PORT} Port...!`));
