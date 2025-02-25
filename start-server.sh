#!/bin/bash

# Cài đặt các dependencies
npm install

# Build ứng dụng React
npm run build

# Cài đặt serve để chạy ứng dụng build
npm install -g serve

# Chạy ứng dụng trên port 3000
serve -s dist -l 3000
