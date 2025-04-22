#!/bin/bash
echo "Running Snyk test..."
snyk test || echo "Snyk found vulnerabilities."

echo "Running Trivy image scan..."
trivy fs . --exit-code 0 --severity HIGH,CRITICAL || echo "Trivy found issues."
