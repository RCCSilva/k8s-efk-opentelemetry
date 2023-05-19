#!/bin/bash

# Installing Elastic CDR
kubectl create -f https://download.elastic.co/downloads/eck/2.7.0/crds.yaml
kubectl apply -f https://download.elastic.co/downloads/eck/2.7.0/operator.yaml

# Installing Cert Manager
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml

# Istalling Opentelementry CDR
kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml

# Installing Istio
istioctl install

# Installing fluentbit
helm upgrade --install fluent-bit fluent/fluent-bit -f helm/fluentbit/values.yml


# Setup namespaces
helm upgrade --install fluent-bit fluent/fluent-bit -f helm/fluentbit/values.yml

# Setup apps, observability, etc.
kubectl apply -f k8s -R

# sleep 15

kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml

