#!/bin/bash
PASSWORD=$(kubectl get secret -n observability elasticsearch-es-elastic-user -o=jsonpath='{.data.elastic}' | base64 --decode; echo)

echo "Username: elastic"
echo "Password: $PASSWORD"
echo ""

kubectl port-forward -n observability service/kibana-kb-http 5601
