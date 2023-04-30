# Kubernetes EFK Opentelemetry

## Commands

- Minikube using local docker images

```bash
eval $(minikube docker-env)
```

## Setup

```bash
minikube start --memory=8g --cpus=4

kubectl create namespace elastic-system
kubectl label namespace elastic-system istio-injection=enabled

kubectl create -f https://download.elastic.co/downloads/eck/2.7.0/crds.yaml
kubectl apply -f https://download.elastic.co/downloads/eck/2.7.0/operator.yaml
```

```bash
kubectl apply -f k8s/

kubectl get secret/apm-server-apm-token -o go-template='{{index .data "secret-token" | base64decode}}'

kubectl get secret elasticsearch-es-elastic-user -o=jsonpath='{.data.elastic}' | base64 --decode; echo
kubectl port-forward service/kibana-kb-http 5601

kubectl port-forward service/app-express 3000
kubectl port-forward service/app-fastify 3000
kubectl port-forward service/app-nest 3000
kubectl port-forward service/app-express-opentelemetry 3000
```

```bash
kubectl run curl --image=radial/busyboxplus:curl -i --tty
```

## OpenTelemetry

```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml
kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml
```

### Fluent Bit

```bash
helm upgrade --install fluent-bit fluent/fluent-bit -f helm/fluentbit/values.yml
```

### Istio

```bash
# helm repo add istio https://istio-release.storage.googleapis.com/charts

kubectl create namespace istio-system
```

## References

- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
- [Minikube WSL2](https://www.virtualizationhowto.com/2021/11/install-minikube-in-wsl-2-with-kubectl-and-helm/)
- [Systemd WSL2](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/)
- [helm](https://helm.sh/docs/intro/install/)
- [Elastic Cloud on Kubernetes](https://www.elastic.co/guide/en/cloud-on-k8s/current/k8s-quickstart.html)