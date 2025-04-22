#!/bin/bash
# Backup PostgreSQL database

timestamp=$(date +%Y%m%d_%H%M%S)
docker exec -t $(docker ps -qf "ancestor=postgres") pg_dump -U postgres ginvoicing > backup_$timestamp.sql