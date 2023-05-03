#!/bin/bash

set -e

kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml
kubectl create -f https://download.elastic.co/downloads/eck/2.7.0/crds.yaml

kubectl apply -f https://download.elastic.co/downloads/eck/2.7.0/operator.yaml

kubectl apply -f k8s/namespace.yml
kubectl apply -f k8s -R

sleep 15

kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml

