"use strict";

import apm from 'elastic-apm-node';
import fastify from 'fastify';

apm.start({
  active: process.env.NODE_ENV === 'development'
})

// Require the framework and instantiate it
const app = fastify({
  logger: true
})

// Declare a route
app.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
await app.listen({ port: 3000 })
app.log.info("listening on 3000")
