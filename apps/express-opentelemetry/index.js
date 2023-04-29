"use strict";

const winston = require('winston');
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
})

const express = require("express");

const PORT = parseInt(process.env.PORT || "3000");
const app = express();

app.get("/", (req, res) => {
  logger.info('hello!');

  res.send("Hello World");
  logger.info('its me!');
});

app.listen(PORT, () => {
  logger.info(`Listening for requests on http://localhost:${PORT}`);
});
