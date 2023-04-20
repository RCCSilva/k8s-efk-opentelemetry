# Kubernetes EFK Opentelemetry

## Commands

- Minikube using local docker images

```bash
eval $(minikube docker-env)
```

## Setup

```bash
minikube start --memory=8g --cpus=4

kubectl create -f https://download.elastic.co/downloads/eck/2.7.0/crds.yaml
kubectl apply -f https://download.elastic.co/downloads/eck/2.7.0/operator.yaml
```

## References

- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
- [Minikube WSL2](https://www.virtualizationhowto.com/2021/11/install-minikube-in-wsl-2-with-kubectl-and-helm/)
- [Systemd WSL2](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/)
- [helm](https://helm.sh/docs/intro/install/)