#!/bin/bash

# Setup namespaces
kubectl apply -f k8s/namespace.yml

# Installing Cert Manager
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml
kubectl wait --for=condition=ready pod -l app=webhook -n cert-manager

# Installing Istio
istioctl install

# Installing Elastic CDR
kubectl create -f https://download.elastic.co/downloads/eck/2.7.0/crds.yaml
kubectl apply -f https://download.elastic.co/downloads/eck/2.7.0/operator.yaml

# Istalling Opentelementry CDR
kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml

# Installing fluentbit
helm upgrade -n observability --install fluent-bit fluent/fluent-bit -f helm/fluentbit/values.yml 

# Setup apps, observability, etc.
kubectl apply -f k8s -R

# Opentelemetry Operator
kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml

