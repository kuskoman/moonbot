#!/bin/sh -x

git pull &&
yarn &&
docker-compose up -d &&
yarn build &&
node dist/index.js