"use strict";

const apm = require('elastic-apm-node')
apm.start({ captureBody: 'transactions' })

const winston = require('winston');
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  defaultMeta: {
    'service.name': 'app-express'
  }
})
const { default: axios } = require('axios');
const { setInterval, setTimeout } = require('timers/promises')

const express = require("express");
const app = express()

app.use(function (req, res, next) {
  apm.currentTransaction?.addLabels({ customLabel: req.headers['customlabel'] })
  next()
})

app.get('/', async function (req, res) {
  logger.info({ ...req })
  const t = apm.currentTransaction
  const s = t.startSpan('test')
  s?.end()
  await setTimeout(150)
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('listening on 3000')
})

const asyncLoop = async () => {
  const api = axios.create({ baseURL: 'http://app-fastify.dev.svc:3000/' })
  for await (const _ of setInterval(1000)) {
    const response = await api.get('/').catch(err => logger.error(err))
    logger.info(`${response.status} ${JSON.stringify(response.data)}`)
  }
}

asyncLoop()
