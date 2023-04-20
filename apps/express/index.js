"use strict";

import apm from 'elastic-apm-node';
import express from 'express';

apm.start({
  active: process.env.NODE_ENV === 'development'
})

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
