
#!/bin/bash

# Load demo SQL data into PostgreSQL
echo "Loading demo data into PostgreSQL..."

DB_NAME="ginvoicing"
DB_USER="postgres"
DB_HOST="localhost"
DB_PORT="5432"

psql -U $DB_USER -d $DB_NAME -h $DB_HOST -p $DB_PORT -f /docker-entrypoint-initdb.d/init-demo.sql

echo "Demo data loaded successfully."
