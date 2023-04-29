#!/bin/bash

docker build -t rccsilva/app-express-opentelemetry:latest .
kubectl rollout restart deployment app-express-opentelemetry

# kubectl port-forward service/app-express-opentelemetry 3000
# autocannon -c 100 -d 5 -p 10 http://localhost:3000