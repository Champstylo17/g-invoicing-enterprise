#!/bin/bash
# Restore PostgreSQL database from backup

if [ -z "$1" ]; then
  echo "Usage: ./restore_db.sh backup_file.sql"
  exit 1
fi

cat $1 | docker exec -i $(docker ps -qf "ancestor=postgres") psql -U postgres -d ginvoicing