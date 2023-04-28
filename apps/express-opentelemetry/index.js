"use strict";

const express = require("express");

const PORT = parseInt(process.env.PORT || "3000");
const app = express();

app.get("/", (req, res) => {
  console.log('Hello!')
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});