"use strict";

const apm = require('elastic-apm-node')
apm.start({ captureBody: 'transactions' })

const fastify = require('fastify')

// Require the framework and instantiate it
const app = fastify({
  logger: true
})

// Declare a route
app.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()