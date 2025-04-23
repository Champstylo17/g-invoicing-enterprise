#!/bin/bash
# GitHub Pages Deployment Script for Docusaurus

# Step 1: Install dependencies
npm install

# Step 2: Build the static site
npm run build

# Step 3: Deploy to gh-pages branch
npx docusaurus deploy
