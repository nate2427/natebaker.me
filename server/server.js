const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 54321;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));
app.use(apiRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App started at address http://localhost:${PORT}`);
});
