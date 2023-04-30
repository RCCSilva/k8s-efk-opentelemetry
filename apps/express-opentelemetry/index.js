"use strict";
const { setInterval } = require('timers/promises')
const winston = require('winston');
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  defaultMeta: {
    'service.name': 'app-express-opentelemetry'
  }
})

const express = require("express");
const { default: axios } = require('axios');

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

const asyncLoop = async () => {
  const api = axios.create({ baseURL: 'http://app-fastify.dev.svc:3000/' })
  for await (const _ of setInterval(1000)) {
    const response = await api.get('/').catch(err => logger.error(err))
    logger.info(`${response.status} ${response.data}`)
  }
}

asyncLoop()