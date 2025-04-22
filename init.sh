#!/bin/bash
echo "🔧 Installing dependencies..."
npm install

echo "📄 Copying .env.template to .env..."
cp packages/config/.env.template .env

echo "🐳 Starting Docker containers..."
docker-compose up -d

echo "🌱 Seeding database..."
node packages/utils/dbSeeder.js

echo "✅ All set!"