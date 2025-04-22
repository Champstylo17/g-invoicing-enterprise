#!/bin/bash
echo "🧱 Bootstrapping G-Invoicing SaaS Monorepo..."
git clone https://github.com/YOUR_ORG/g-invoicing.git $1
cd $1 || exit
npm install
npm run dev