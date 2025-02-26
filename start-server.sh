#!/bin/bash

# Cài đặt các dependencies
npm install

# Build ứng dụng React
npm run build

# Cài đặt serve để chạy ứng dụng build
npm install serve

# Chạy ứng dụng trên port 3000
pm2 start serve --name "my-serve" -- -s dist -l 3000 --no-clipboard
