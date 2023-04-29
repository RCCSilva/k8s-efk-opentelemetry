#!/bin/bash

docker build -t rccsilva/app-fastify:latest .
kubectl rollout restart deployment app-fastify

# kubectl port-forward service/app-fastify 3000
# autocannon -c 100 -d 5 -p 10 http://localhost:3000