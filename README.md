# Kubernetes EFK Opentelemetry

A small Kubernetes template for "fast" setup. The objective is have "must have" and "should have" ideas that can be selected and easily adopted on any Kubernetes setup.

## Debugging

```bash
kubectl run curl --image=radial/busyboxplus:curl -i --tty
```

## Deployments

- Elastic on Kubernetes
  + Kibana
  + Agent
  + APM Server
  + Elastic Search
- Istio
- OpenTelemetry
- Fluent Bit
- Cert Manager

## References

- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
- [Minikube WSL2](https://www.virtualizationhowto.com/2021/11/install-minikube-in-wsl-2-with-kubectl-and-helm/)
- [Systemd WSL2](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/)
- [helm](https://helm.sh/docs/intro/install/)
- [Elastic Cloud on Kubernetes](https://www.elastic.co/guide/en/cloud-on-k8s/current/k8s-quickstart.html)
