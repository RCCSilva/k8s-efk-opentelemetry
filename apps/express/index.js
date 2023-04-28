"use strict";

import apm from 'elastic-apm-node';
const agent = apm.start()

import express from 'express';
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
