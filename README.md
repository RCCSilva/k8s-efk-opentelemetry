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

```bash
kubectl apply -f k8s/

kubectl get secret elasticsearch-es-elastic-user -o=jsonpath='{.data.elastic}' | base64 --decode; echo
kubectl port-forward service/kibana-kb-http 5601  

docker build -t rccsilva/app-express:latest .
kubectl rollout restart deployment app-express
```

```bash
kubectl run curl --image=radial/busyboxplus:curl -i --tty
```

## References

- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
- [Minikube WSL2](https://www.virtualizationhowto.com/2021/11/install-minikube-in-wsl-2-with-kubectl-and-helm/)
- [Systemd WSL2](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/)
- [helm](https://helm.sh/docs/intro/install/)
- [](https://www.elastic.co/guide/en/cloud-on-k8s/current/k8s-quickstart.html)