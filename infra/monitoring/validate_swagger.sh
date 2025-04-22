#!/bin/bash
echo "Validating Swagger/OpenAPI Spec..."
npx swagger-cli validate ./docs/openapi.yaml || echo "Validation failed"
