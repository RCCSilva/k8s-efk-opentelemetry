"use strict";

import apm from 'elastic-apm-node';
import express from 'express';

const agent = apm.start()

const app = express()

app.get('/', function (req, res) {
  const transaction = agent.startTransaction('test')
  res.send('Hello World!')
  transaction.end()
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
