#!/bin/bash

docker build -t rccsilva/app-express:latest .
kubectl rollout -n dev restart deployment app-express

# kubectl port-forward service/app-express 3000
# autocannon -c 100 -d 5 -p 10 http://localhost:3000